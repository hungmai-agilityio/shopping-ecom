import { clsx } from 'clsx';
import { memo } from 'react';

// Components
import { Button } from '@/ui/components';

interface IProps {
  colors: string[];
  selectedColor?: string;
  onClick?: (color: string) => void;
}

const ColorPicker = memo(({ colors, selectedColor, onClick }: IProps) => {
  const handleChange = (color: string) => {
    if (onClick) {
      onClick(color);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {colors?.map((color) => (
        <Button
          aria-label={`${color}-picker`}
          id={color}
          key={color}
          onClick={handleChange.bind(null, color)}
          className={clsx(
            `h-4 w-4 rounded-full focus:border focus:border-green-800`,
            {
              'border border-dark': color === 'White',
              'ring-2 ring-dark': color === selectedColor
            }
          )}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
});

export default ColorPicker;
