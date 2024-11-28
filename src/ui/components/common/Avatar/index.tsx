import { clsx } from 'clsx';
import Image, { ImageProps } from 'next/image';

// Constants
import { avatarSizeClasses, SIZE } from '@/constants';

interface AvatarProps extends ImageProps {
  size?: SIZE.SMALL | SIZE.MEDIUM | SIZE.LARGE;
  styles?: string;
  circle?: boolean;
  onClick?: () => void;
}

const Avatar = ({
  src,
  alt,
  size = SIZE.SMALL,
  styles,
  circle,
  onClick
}: AvatarProps) => {
  const defaultAvatar = '/user.svg';

  return (
    <div
      className={clsx('relative', avatarSizeClasses[size], styles, {
        'cursor-pointer': onClick
      })}
    >
      <Image
        data-testid="avatar"
        onClick={onClick}
        src={src || defaultAvatar}
        alt={alt}
        fill
        className={clsx(
          'object-cover font-bold',
          circle && 'rounded-full',
          styles
        )}
      />
    </div>
  );
};

export default Avatar;
