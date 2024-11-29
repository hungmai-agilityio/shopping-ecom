import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Head = ({ children }: IProps) => {
  return (
    <thead className="text-md font-bold text-left sticky top-0 z-10 bg-white">
      {children}
    </thead>
  );
};
