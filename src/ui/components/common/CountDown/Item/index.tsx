import { clsx } from 'clsx';

interface ItemProps {
  label: string;
  value: string;
  isCircle?: boolean;
}

const CountdownItem = ({ label, value, isCircle }: ItemProps) => {
  return (
    <div
      className={clsx('flex flex-col items-center', {
        'flex-col-reverse w-16 h-16 bg-white rounded-full justify-center':
          isCircle
      })}
    >
      <span
        className={clsx('lg:text-lg text-xs font-medium', {
          'lg:text-xs': isCircle
        })}
      >
        {label}
      </span>
      <span
        className={clsx('lg:text-3xl text-xl font-bold', {
          'lg:text-sm': isCircle
        })}
      >
        {value}
      </span>
    </div>
  );
};

export default CountdownItem;
