import Image from 'next/image';
import { clsx } from 'clsx';

// Constants
import { inter } from '@/constants';

// Components
import { Card, Icon } from '@/ui/components';

interface CardInfoProps {
  image: string;
  name: string;
  desc: string;
}
const CardInfo = ({ image, name, desc }: CardInfoProps) => {
  return (
    <Card styles="w-card-info h-card-info">
      <div className="w-card-info h-card-info-md bg-gray-light">
        <Image
          src={image}
          alt={name}
          priority
          width={326}
          height={390}
          loading="eager"
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
        <div className="mt-8">
          <p className={clsx('text-3xl font-medium', inter.className)}>
            {name}
          </p>
          <p className="my-2">{desc}</p>
          <div className="flex gap-4">
            <Icon
              src="/twiter-dark.svg"
              alt="icon twitter"
              width={18}
              height={18}
              priority
            />
            <Icon
              src="/instagram-dark.svg"
              alt="icon instagram"
              width={18}
              height={18}
              priority
            />
            <Icon
              src="/linkedin-dark.svg"
              alt="icon linkedin"
              width={18}
              height={18}
              priority
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
export default CardInfo;
