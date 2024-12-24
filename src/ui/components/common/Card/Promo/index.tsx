import Image from 'next/image';

// Components
import { Card } from '@/ui/components';

interface CardPromoProps {
  children?: React.ReactNode;
  width: number;
  height: number;
  img: string;
  name: string;
}

const CardPromo = ({ img, name, width, height, children }: CardPromoProps) => {
  return (
    <Card styles={`relative bg-dark`}>
        <Image
          src={img}
          alt={name}
          width={width}
          height={height}
          style={{ objectFit: 'contain' }}
        />
      {children && (
        <div className="absolute bottom-0 left-0 p-6 text-white">
          {children}
        </div>
      )}
    </Card>
  );
};

export default CardPromo;
