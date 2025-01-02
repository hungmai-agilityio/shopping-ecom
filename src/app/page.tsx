import { clsx } from 'clsx';
import { popping, slideHero } from '@/constants';

// Sections
import {
  Arrival,
  BestSellingSection,
  FlashSale,
  OurProductSection,
  ServiceSection,
  Advertisement
} from '@/ui/sections';

// Components
import { Carousel, ScrollTop } from '@/ui/components';

// Interfaces
import { ISearchParams } from '@/interface';

interface HomeProps {
  searchParams: ISearchParams;
}
const Home = async ({ searchParams }: HomeProps) => {
  return (
    <div className={clsx('my-10 container lg:px-1 px-4', popping.className)}>
      <div className="md:block hidden">
        <Carousel items={slideHero} />
      </div>
      <FlashSale searchParams={searchParams} />
      <BestSellingSection searchParams={searchParams} />
      <section className="my-20">
        <Advertisement />
      </section>
      <section className="my-20">
        <OurProductSection searchParams={searchParams} />
      </section>
      <section className="my-20">
        <Arrival />
      </section>
      <ServiceSection />
      <ScrollTop />
    </div>
  );
};

export default Home;
