import { ReactNode } from 'react';
import { clsx } from 'clsx';

// Constants
import { inter } from '@/constants';

interface TextProps {
  children?: ReactNode;
  styles?: string;
}

export const Heading = ({ children, styles }: TextProps) => {
  return (
    <h3
      className={clsx(
        `${inter.className} lg:text-4xl font-semibold md:text-3xl md:leading-normal sm:text-xl`,
        styles
      )}
    >
      {children}
    </h3>
  );
};
