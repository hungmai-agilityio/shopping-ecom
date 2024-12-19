'use client';

import { useState } from 'react';

// Constants
import { TYPE } from '@/constants';

// Interfaces
import { IUser } from '@/interface';

// Components
import { Icon } from '@/ui/components';

// Sections
import { BillingDetails } from '@/ui/sections';

interface BillingProps {
  user: IUser;
}

const BillingMenu = ({ user }: BillingProps) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Toggle menu open/close state
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="md:block hidden">
        <BillingDetails user={user} />
      </div>
      <div className="md:hidden block absolute -top-14 -left-2 duration-300">
        <Icon
          src="/arrow-open.svg"
          alt="billing-menu"
          width={32}
          height={32}
          priority
          variant={TYPE.SECOND}
          onClick={toggleMenu}
          className="transition-transform duration-300 ease-in-out transform hover:rotate-180 opacity-35 hover:opacity-100"
        />
        <div
          className={`fixed top-0 left-0 w-full h-full overflow-y-auto bg-white z-50 p-6
          transition-transform duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
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
          <BillingDetails user={user} />
        </div>
      </div>
    </>
  );
};

export default BillingMenu;
