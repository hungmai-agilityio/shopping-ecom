import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children: ReactNode;
  id?: string;
  styles?: string;
}

export const Row = ({ children, id, styles }: IProps) => {
  return (
    <tr
      data-id={id}
      className={clsx('lg:table-row flex flex-col shadow-table', styles)}
    >
      {children}
    </tr>
  );
};
