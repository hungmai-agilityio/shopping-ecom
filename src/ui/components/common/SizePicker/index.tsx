import { clsx } from 'clsx';

// Constants
import { popping } from '@/constants';

interface SizeProps {
  size: string;
  selected: string;
  onClick: () => void;
}

const SizePicker = ({ size, selected, onClick }: SizeProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'min-w-8 h-8 px-1 max-w-btn-size truncate border border-dark rounded text-base hover:bg-primary hover:text-white hover:border-primary',
        popping.className,
        {
          'bg-primary text-white border-primary': selected === size
        }
      )}
    >
      {size}
    </button>
  );
};

export default SizePicker;
