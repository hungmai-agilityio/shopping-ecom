'use client';
import { Icon } from '@/ui/components';

interface socialProps {
  src: string;
  alt: string;
}
const Social = ({ src, alt }: socialProps) => {
  return (
    <Icon
      src={src}
      alt={alt}
      width={27}
      height={24}
      className="w-7 h-6"
      onClick={() => alert('Update later')}
      priority
    />
  );
};

export default Social;
