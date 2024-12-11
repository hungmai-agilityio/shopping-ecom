import Image, { ImageProps } from 'next/image';
import { clsx } from 'clsx';

// Components
import { Card } from '@/ui/components';

interface SolutionProps extends ImageProps {
  title: string;
  desc?: string;
  isBorder?: boolean;
}

const CardSolution = ({
  title,
  desc,
  src,
  alt,
  isBorder = false,
  ...props
}: SolutionProps) => {
  const baseClasses =
    'flex flex-col w-card-sm h-card-sm items-center justify-center rounded-sm p-6 transition-all duration-300 text-dark truncate';
  const borderClasses = isBorder
    ? 'border border-dark cursor-pointer hover:bg-primary hover:text-white group bg-white'
    : '';

  return (
    <Card>
      <div className={clsx(`${baseClasses}`, borderClasses)}>
        <div
          className={clsx(
            'relative mb-4 rounded-full transition-all duration-300 shadow-card',
            { 'group-hover:shadow-card-hover': isBorder }
          )}
        >
          <span
            className={clsx(
              'absolute inset-0 bg-black rounded-full transition-all duration-300',
              { 'group-hover:bg-white': isBorder }
            )}
          ></span>

          <Image
            src={src}
            alt={alt}
            width={40}
            height={40}
            priority
            className={clsx(
              'relative z-10 rounded-full transition-all duration-300 p-2',
              {
                'group-hover:brightness-0': isBorder
              }
            )}
            {...props}
          />
        </div>
        <h3
          className={clsx('text-lg mt-2 font-semibold', {
            'text-3xl': isBorder
          })}
        >
          {title}
        </h3>
        <p className={clsx('text-sm mt-2', { 'text-base': isBorder })}>
          {desc}
        </p>
      </div>
    </Card>
  );
};

export default CardSolution;
