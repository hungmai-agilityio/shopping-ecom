import { clsx } from 'clsx';

interface ItemProps {
  title: string;
  children: number | string;
  underline?: boolean;
}
const FieldLabel = ({ title, children, underline = true }: ItemProps) => {
  return (
    <div
      className={clsx('flex justify-between text-dark text-base mb-2 py-4', {
        'border-b border-dark': underline
      })}
    >
      <p>{title}:</p>
      <p>{children}</p>
    </div>
  );
};

export default FieldLabel;
