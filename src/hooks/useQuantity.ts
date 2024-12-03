import { useState } from 'react';

interface UseQuantityProps {
  value?: number;
  min?: number;
  max?: number;
}

export const useQuantity = ({
  value = 1,
  min = 1,
  max = 1000
}: UseQuantityProps) => {
  const [quantity, setQuantity] = useState(value);

  const increase = () => {
    if (quantity < max) setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > min) setQuantity((prev) => prev - 1);
  };

  const setManual = (value: number) => {
    const validatedValue = Math.max(min, Math.min(max, value));
    setQuantity(validatedValue);
  };

  return { quantity, increase, decrease, setManual };
};
