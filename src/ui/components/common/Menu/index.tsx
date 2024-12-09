import { ReactNode } from 'react';

interface MenuProps {
  children: ReactNode;
}
const Menu = ({ children }: MenuProps) => {
  return (
    <div className="w-56 h-full bg-gradient-overlay rounded-md">{children}</div>
  );
};

export default Menu;
