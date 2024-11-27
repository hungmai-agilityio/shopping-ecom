import Image from 'next/image';

interface RatingProps {
  icon?: string;
  count: number;
}

const Rating = ({ icon = '/star.svg', count }: RatingProps) => {
  const renderStars = Array.from({ length: Math.min(count, 5) });

  return (
    <div className="flex gap-1">
      {renderStars.map((_, index) => (
        <Image
          key={index}
          src={icon}
          alt={`rating ${index + 1}`}
          width={20}
          height={20}
          priority
        />
      ))}
    </div>
  );
};

export default Rating;
