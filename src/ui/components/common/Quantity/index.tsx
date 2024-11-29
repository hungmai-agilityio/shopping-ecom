'use client';

import React, { memo, useState } from 'react';
import { clsx } from 'clsx';

// Components
import { Icon } from '@/ui/components';

// Constants
import { popping } from '@/constants';

interface QuantityProps {
  value: number;
  onChange?: (newQuantity: number) => void;
}

const Quantity = memo(({ value = 1, onChange }: QuantityProps) => {
  const [quantity, setQuantity] = useState<number>(value);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange?.(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange?.(newQuantity);
  };

  return (
    <div
      className={clsx(
        'flex items-center gap-4 bg-white w-20 h-11 rounded-md justify-center border border-dark',
        popping.className
      )}
    >
      <span className="px-2">{quantity}</span>
      <div className="flex flex-col gap-3">
        <Icon
          src="/arrow-top.svg"
          alt="arrow-top icon"
          width={12}
          height={12}
          onClick={handleIncrease}
          className="select-none"
          priority
        />
        <Icon
          src="/arrow-bot.svg"
          alt="arrow-bot icon"
          width={12}
          height={12}
          onClick={handleDecrease}
          isDisabled={quantity === 1}
          className="select-none"
          priority
        />
      </div>
    </div>
  );
});

export default Quantity;
