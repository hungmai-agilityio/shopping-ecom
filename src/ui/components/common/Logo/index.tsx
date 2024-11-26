import Link from 'next/link';
import { clsx } from 'clsx';

// Constants
import { inter } from '@/constants';

interface logoProps {
  url?: string;
  label?: string;
  color?: string;
}
const Logo = ({
  url = '/',
  label = 'Exclusive',
  color = 'text-dark'
}: logoProps) => {
  return (
    <div className={`${inter.className}`}>
      <Link href={url} className={clsx('font-bold text-2xl', color)}>
        {label}
      </Link>
    </div>
  );
};

export default Logo;
