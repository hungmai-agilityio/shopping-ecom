import Image from 'next/image';
import { Heading } from '@/ui/components';

const StorySection = () => {
  return (
    <section className="container flex lg:flex-row flex-col-reverse items-center justify-between gap-14 my-20">
      <div className="md:w-card-about w-full">
        <Heading>Our Story</Heading>
        <p className="text-base md:mt-16 mt-7">
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
      <Image
        src="/about.png"
        alt="about-image"
        width={600}
        height={609}
        loading="eager"
      />
    </section>
  );
};

export default StorySection;
