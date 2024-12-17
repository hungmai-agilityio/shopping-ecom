import { Heading } from '@/ui/components';
import Image from 'next/image';

const StorySection = () => {
  return (
    <section className="container flex items-center justify-between gap-10 my-20">
      <div className="w-card-about">
        <Heading>Our Story</Heading>
        <p className="text-base mt-16">
          Launced in 2015, Exclusive is South Asia's premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p className="text-base mt-10">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>

      <Image src="/about.png" alt="about-image" width={705} height={609} />
    </section>
  );
};

export default StorySection;
