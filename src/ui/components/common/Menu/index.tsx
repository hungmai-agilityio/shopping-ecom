import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
  styles?: string;
}
const Menu = ({ children, styles }: MenuProps) => {
  return (
    <div className={clsx('w-56 bg-gradient-overlay rounded-md', styles)}>
      {children}
    </div>
  );
};

export default Menu;
