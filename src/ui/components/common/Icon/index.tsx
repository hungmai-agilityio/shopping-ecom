import { TYPE, iconTypeClasses } from '@/constants';
import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

interface IconProps extends ImageProps {
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: TYPE.PRIMARY | TYPE.SECOND | TYPE.THIRD;
  styles?: string;
}

const Icon = ({
  src,
  alt,
  width,
  height,
  onClick,
  isDisabled,
  variant = TYPE.PRIMARY,
  styles,
  ...props
}: IconProps) => {
  return (
    <div
      className={clsx('flex', iconTypeClasses[variant], styles, {
        'opacity-20 cursor-not-allowed': isDisabled,
        'cursor-pointer': onClick
      })}
      onClick={onClick}
    >
      <Image src={src} alt={alt} width={width} height={height} {...props} />
    </div>
  );
};

export default Icon;
