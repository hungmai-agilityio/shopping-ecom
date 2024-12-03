'use client';

import clsx from 'clsx';

// Hooks
import { useQuantity } from '@/hooks';

// Components
import { Icon } from '@/ui/components';

// Constants
import { popping } from '@/constants';

interface VerticalProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const QuantityVertical = ({
  value = 1,
  min = 1,
  max = 1000,
  onChange
}: VerticalProps) => {
  const { quantity, increase, decrease, setManual } = useQuantity({
    value,
    min,
    max
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(e.target.value);

    if (isNaN(newValue)) newValue = min;
    if (newValue < min) newValue = min;
    if (newValue > max) newValue = max;

    setManual(newValue);
    onChange(newValue);
  };

  const handleIncrease = () => {
    if (quantity < max) {
      increase();
      onChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      decrease();
      onChange(quantity - 1);
    }
  };

  return (
    <div
      className={clsx(
        'flex items-center gap-4 bg-white w-20 h-11 rounded-md justify-center border border-dark',
        popping.className
      )}
    >
      <input
        value={quantity}
        onChange={handleInputChange}
        className="w-8 text-center outline-none border-none bg-transparent"
      />
      <div className="flex flex-col gap-3">
        <Icon
          src="/arrow-top.svg"
          alt="arrow-top icon"
          width={12}
          height={12}
          onClick={handleIncrease}
          isDisabled={quantity === max}
          className="select-none"
          priority
        />
        <Icon
          src="/arrow-bot.svg"
          alt="arrow-bot icon"
          width={12}
          height={12}
          onClick={handleDecrease}
          isDisabled={quantity === min}
          className="select-none"
          priority
        />
      </div>
    </div>
  );
};

export default QuantityVertical;
