import React from 'react';
import clsx from 'clsx';
import { popping } from '@/constants';

interface CardProps {
  children: React.ReactNode;
  styles?: string;
  title?: string;
}

const Card = ({ children, styles, title }: CardProps) => {
  return (
    <div
      className={clsx('rounded-sm overflow-hidden', popping.className, styles)}
    >
      {title && (
        <div className="border-t-2 border-r-2 border-2 p-4 font-medium">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
