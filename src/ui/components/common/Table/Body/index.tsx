import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Body = ({ children }: IProps) => {
  return <tbody className="relative max-h-96">{children}</tbody>;
};
