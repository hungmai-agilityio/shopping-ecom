import { Suspense } from 'react';

// Components
import {
  Countdown,
  Heading,
  PaginationProduct,
  SkeletonProductList,
  Tag
} from '@/ui/components';
import { ProductListFlashSale } from '@/ui/sections';

// Interfaces
import { ISearchParams, IUser } from '@/interface';

interface FlashSaleProps {
  user: IUser;
  searchParams: ISearchParams;
}

const FlashSale = ({ user, searchParams }: FlashSaleProps) => {
  const start = parseInt(searchParams['flash-sale-page'] || '0', 10);

  return (
    <section className="my-20">
      <Tag label="Today's" />
      <div className="flex justify-between flex-wrap items-center mb-12 w-full">
        <div className="md:flex mt-7 mb-4 gap-28 items-end">
          <Heading>Flash sales</Heading>
          <Countdown days={3} hours={1} minutes={25} seconds={5} />
        </div>
        <PaginationProduct queryPage="flash-sale-page" start={start} />
      </div>
      <Suspense key={start} fallback={<SkeletonProductList />}>
        <ProductListFlashSale user={user} page={start} />
      </Suspense>
    </section>
  );
};

export default FlashSale;
