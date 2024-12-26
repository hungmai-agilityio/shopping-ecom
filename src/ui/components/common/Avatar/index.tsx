import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

// Constants
import { avatarSizeClasses, SIZE } from '@/constants';

interface AvatarProps extends ImageProps {
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  styles?: string;
  isCircle?: boolean;
  onClick?: () => void;
}

const Avatar = ({
  src,
  alt,
  size = SIZE.SMALL,
  styles,
  isCircle,
  onClick
}: AvatarProps) => {
  const defaultAvatar = '/user.svg';

  return (
    <div
      className={clsx('relative bg-gray-300', avatarSizeClasses[size], styles, {
        'cursor-pointer': onClick,
        'rounded-full': isCircle
      })}
    >
      <Image
        data-testid="avatar"
        onClick={onClick}
        src={src || defaultAvatar}
        alt={alt}
        loading="eager"
        fill
        className={clsx(
          'object-cover font-bold',
          isCircle && 'rounded-full',
          styles
        )}
      />
    </div>
  );
};

export default Avatar;
