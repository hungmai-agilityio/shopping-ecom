import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

// Constants
import {
  btnSizeClasses,
  btnTypeClasses,
  popping,
  SIZE,
  TYPE
} from '@/constants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
  children?: ReactNode;
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  styles?: string;
}

const Button = ({
  children,
  variant = TYPE.PRIMARY,
  size = SIZE.MEDIUM,
  disabled,
  onClick,
  styles,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        `rounded font-medium md:text-base text-xs ${popping.className}`,
        btnSizeClasses[size],
        btnTypeClasses[variant],
        styles,
        disabled && 'cursor-not-allowed opacity-50'
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
