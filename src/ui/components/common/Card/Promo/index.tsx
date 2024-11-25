import Image, { ImageProps } from 'next/image';

// Components
import { Card } from '@/ui/components';

interface CardPromoProps extends ImageProps {
  children?: React.ReactNode;
}

const CardPromo = ({
  src,
  alt,
  width,
  height,
  children,
  ...props
}: CardPromoProps) => {
  return (
    <Card>
      <div className="relative bg-dark " style={{ width, height }}>
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            {...props}
          />
        </div>

        {children && (
          <div className="absolute inset-0 flex items-end p-6 text-white">
            {children}
          </div>
        )}
      </div>
    </Card>
  );
};

export default CardPromo;
