'use client';

import { useState } from 'react';

// Components
import { Icon, Navbar } from '@/ui/components';

interface BurgerProps {
  items: Array<{ name: string; url?: string }>;
}

const BurgerMenu = ({ items }: BurgerProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Toggle menu open/close state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu function
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Icon
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        priority
        onClick={toggleMenu}
      />
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 p-6
          transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-end mb-8">
          <Icon
            src="/close.svg"
            alt="close"
            width={24}
            height={24}
            priority
            onClick={toggleMenu}
          />
        </div>
        <Navbar
          items={items}
          styles="flex flex-col gap-6 text-2xl text-center"
          onClick={closeMenu}
        />
      </div>
    </>
  );
};

export default BurgerMenu;
