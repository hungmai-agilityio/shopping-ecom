import React from 'react';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  styles?: string;
  title?: string;
}

const Card = ({ children, styles, title }: CardProps) => {
  return (
    <div className={clsx('rounded-lg overflow-hidden', styles)}>
      {title && (
        <div className="border-t-2 border-r-2 border-2 p-4 font-medium">{title}</div>
      )}
      {children}
    </div>
  );
};

export default Card;
