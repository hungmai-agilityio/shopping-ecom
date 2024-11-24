import Image, { ImageProps } from 'next/image';

interface CardImageProps extends ImageProps {
  children?: React.ReactNode;
}

const CardImage = ({
  src,
  alt,
  width,
  height,
  children,
  ...props
}: CardImageProps) => {
  return (
    <div
      className="relative bg-dark rounded-md overflow-hidden"
      style={{ width, height }}
    >
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
  );
};

export default CardImage;
