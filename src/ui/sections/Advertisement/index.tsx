import { Button, Countdown, Heading } from '@/ui/components';
import Image from 'next/image';

const Advertisement = () => {
  return (
    <div className="h-full bg-dark py-16 px-14 flex flex-wrap justify-between ">
      <div>
        <p className="text-success">Categories</p>
        <Heading styles="my-5 text-white w-80">
          Enhance Your Music Experience
        </Heading>
        <Countdown days={5} hours={24} minutes={0} seconds={5} isCircle />
        <div className="mt-8">
          <Button className="bg-success w-btn-sm text-white h-14 rounded font-medium md:text-base text-xs">
            Buy Now!
          </Button>
        </div>
      </div>
      <Image src="/ads-frame.png" alt="ads frame" width={588} height={330} />
    </div>
  );
};
export default Advertisement;
