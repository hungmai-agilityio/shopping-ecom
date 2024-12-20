import { clsx } from 'clsx';
import { popping, slideHero } from '@/constants';

// Libs
import { getUserCookie } from '@/libs';

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
import { Carousel } from '@/ui/components';

// Interfaces
import { ISearchParams } from '@/interface';

interface HomeProps {
  searchParams: ISearchParams;
}
const Home = async ({ searchParams }: HomeProps) => {
  const user = await getUserCookie();
  return (
    <div className={clsx('my-10', popping.className)}>
      <div className="lg:block hidden">
        <Carousel items={slideHero} />
      </div>
      <FlashSale user={user} searchParams={searchParams} />
      <section className="my-20 container">
        <BestSellingSection user={user} searchParams={searchParams} />
      </section>
      <section className="my-20 container">
        <Advertisement />
      </section>
      <section className="my-20 container">
        <OurProductSection searchParams={searchParams} user={user} />
      </section>
      <section className="my-20 container">
        <Arrival />
      </section>
      <ServiceSection />
    </div>
  );
};

export default Home;
