'use client';

import { ReactNode, useRef } from 'react';
import { clsx } from 'clsx';

// Hooks
import { useOutsideClick } from '@/hooks';

export interface DropdownProps {
  children: ReactNode;
  menuButton: ReactNode;
  styles?: string;
  setVisible: (visible: boolean) => void;
  isOpen?: boolean;
}
const Dropdown = ({
  children,
  menuButton,
  styles,
  setVisible,
  isOpen
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => setVisible(!isOpen);

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setVisible(false)
  });

  return (
    <div ref={dropdownRef}>
      <div
        className={clsx('flex items-center relative', styles)}
        onClick={toggleVisibility}
      >
        {menuButton}
      </div>
      {isOpen && children}
    </div>
  );
};

export default Dropdown;
