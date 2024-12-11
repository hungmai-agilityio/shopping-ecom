import { clsx } from 'clsx';

export interface ITab {
  selected: string;
  value: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Tab = ({ value, selected, title, onClick }: ITab) => (
  <button
    value={value}
    className={clsx(
      'lg:text-base text-lg text-dark lg:border-none border border-dark lg:p-0 p-2',
      {
        ' text-primary font-medium border-primary ': selected === value
      }
    )}
    onClick={onClick}
  >
    {title}
  </button>
);
