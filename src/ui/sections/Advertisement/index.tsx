import Image from 'next/image';
import { clsx } from 'clsx';

// Constants
import { inter } from '@/constants';

// Components
import { Button, Countdown } from '@/ui/components';

const Advertisement = () => {
  return (
    <div className="h-full bg-dark py-16 px-14 flex flex-wrap justify-between ">
      <div>
        <p className="text-success">Categories</p>
        <h2
          className={clsx(
            'md:text-5xl text-3xl md:leading-snug my-5 text-white max-w-[443px]',
            inter.className
          )}
        >
          Enhance Your Music Experience
        </h2>
        <div className="md:flex hidden">
          <Countdown days={5} hours={24} minutes={0} seconds={5} isCircle />
        </div>
        <div className="mt-8">
          <Button className="bg-success w-btn-sm text-white h-14 rounded font-medium md:text-base text-xs">
            Buy Now!
          </Button>
        </div>
      </div>
      <Image
        src="/ads-frame.png"
        alt="ads frame"
        width={568}
        height={330}
        loading="eager"
      />
    </div>
  );
};
export default Advertisement;
