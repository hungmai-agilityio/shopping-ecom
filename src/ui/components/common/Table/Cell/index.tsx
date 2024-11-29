import clsx from 'clsx';
import { ReactNode } from 'react';

// Constants
import { CELL } from '@/constants';

interface IProps {
  children?: ReactNode;
  type: CELL.TD | CELL.TH;
  label?: string;
  styles?: string;
}

export const Cell = ({ children, type, label, styles }: IProps) => {
  const TagName = type;

  return (
    <TagName className={clsx('bg-white p-6', styles)}>
      <span className="lg:hidden font-semibold mr-2">{label}</span>
      {children}
    </TagName>
  );
};
