import Image from 'next/image';

// Components
import { Card } from '@/ui/components';

interface CardPromoProps {
  children?: React.ReactNode;
  width: string;
  height: string;
  img: string;
  name: string;
}

const CardPromo = ({ img, name, width, height, children }: CardPromoProps) => {
  return (
    <Card styles={`relative bg-dark ${width} ${height}`}>
      <Image
        src={img}
        alt={name}
        layout="responsive"
        width={500}
        height={500}
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
