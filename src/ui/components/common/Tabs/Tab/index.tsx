import { tabTypeClasses, TYPE } from '@/constants';
import { clsx } from 'clsx';

export interface ITab {
  selected: string;
  value: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: TYPE.PRIMARY | TYPE.SECOND;
}

export const Tab = ({
  value,
  selected,
  title,
  onClick,
  variant = TYPE.PRIMARY
}: ITab) => (
  <button
    value={value}
    className={clsx('text-lg text-dark p-2', tabTypeClasses[variant], {
      'text-primary font-medium border-primary': selected === value
    })}
    onClick={onClick}
  >
    {title}
  </button>
);
