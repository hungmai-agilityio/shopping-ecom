import React, { InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

// Constants
import { INPUT_TYPE, TYPE, inputTypeClasses } from '@/constants';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isRequired?: boolean;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
  icon?: string;
  message?: string;
  onClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isRequired,
      variant = TYPE.PRIMARY,
      className,
      icon,
      message,
      onClick,
      value = '',
      onChange,
      type = INPUT_TYPE.TEXT,
      placeholder,
      disabled,
      name,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-600 capitalize">
            {label}
            {isRequired && <span className="text-primary ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={isRequired}
            className={clsx(
              'w-full p-2 text-gray-700 outline-none',
              inputTypeClasses[variant],
              message && 'border-primary focus:ring-primary',
              icon && 'pr-10',
              className
            )}
            {...props}
          />
          {icon && (
            <Image
              src={icon}
              alt="icon"
              width={20}
              height={20}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              onClick={onClick}
            />
          )}
        </div>
        {message && <span className="text-xs text-primary">{message}</span>}
      </div>
    );
  }
);

export default Input;
