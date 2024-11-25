'use client';

import { popping } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  items: Array<{ name: string; url?: string }>;
  styles?: string;
  onClick?: () => void;
}

const Navbar = ({ items, styles, onClick }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className={`${popping.className} text-base ${styles}`}>
      {items.map((item, index) => {
        const isActive = pathname === item.url;

        return (
          <div key={index} className="relative">
            <Link href={item.url || '#'} onClick={onClick} className="relative">
              {item.name}
              {isActive && (
                <span className="absolute left-0 right-0 -bottom-0 mx-auto h-[1px] w-full bg-gray-400"></span>
              )}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
