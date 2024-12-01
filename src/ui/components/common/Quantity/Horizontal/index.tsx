'use client';
import clsx from 'clsx';

// Hooks
import { useQuantity } from '@/hooks';

// Components
import { Icon } from '@/ui/components';

// Constants
import { popping } from '@/constants';

interface HorizontalProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
}

const QuantityHorizontal = ({
  value = 1,
  min = 1,
  max = 1000,
  onChange
}: HorizontalProps) => {
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
        'flex items-center gap-4 bg-white rounded-md justify-center border border-dark',
        popping.className
      )}
    >
      <div
        className="hover:bg-primary hover:border-primary w-10 h-11 flex justify-center items-center border-r border-dark cursor-pointer hover:text-white transition-all"
        onClick={handleDecrease}
      >
        <Icon
          src="/minus.svg"
          alt="minus icon"
          width={12}
          height={12}
          className="select-none"
          isDisabled={quantity === min}
        />
      </div>
      <input
        value={quantity}
        onChange={handleInputChange}
        className="w-12 text-center outline-none border-none bg-transparent"
      />
      <div
        className="hover:bg-primary hover:border-primary w-10 h-11 flex justify-center items-center border-l border-dark cursor-pointer hover:text-white transition-all"
        onClick={handleIncrease}
      >
        <Icon
          src="/plus.svg"
          alt="plus icon"
          width={12}
          height={12}
          className="select-none"
          isDisabled={quantity === max}
        />
      </div>
    </div>
  );
};

export default QuantityHorizontal;
