import { clsx } from 'clsx';

// Constants
import { popping } from '@/constants';

// Components
import { Icon } from '@/ui/components';
import Link from 'next/link';

interface ItemProps {
  image: string;
  name: string;
  link?: string;
  onClick?: () => void;
}
const MenuItem = ({ image, name, link = '#', onClick }: ItemProps) => {
  return (
    <Link
      href={link}
      className={clsx(
        'flex justify-between items-center gap-2 text-white cursor-pointer w-full p-2 hover:bg-purple-400 rounded-md',
        popping.className
      )}
      onClick={onClick}
    >
      <Icon src={image} alt={name} width={24} height={24} priority />
      <p className="capitalize">{name}</p>
    </Link>
  );
};

export default MenuItem;
