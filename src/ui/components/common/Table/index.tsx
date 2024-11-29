import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}
const Table = ({ children }: IProps) => {
  return (
    <table className="w-full border-separate border-spacing-y-5 text-dark">
      {children}
    </table>
  );
};

export default Table;
