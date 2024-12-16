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
    <div className="container my-20">
      <Tag label="Today's" />
      <div className="flex justify-between flex-wrap items-end mb-12">
        <div className="md:flex mt-7 lg:gap-28 gap-9 items-end">
          <Heading>Flash sales</Heading>
          <Countdown days={3} hours={1} minutes={25} seconds={5} />
        </div>
        <PaginationProduct queryPage="flash-sale-page" start={start} />
      </div>
      <Suspense key={start} fallback={<SkeletonProductList />}>
        <ProductListFlashSale user={user} page={start} />
      </Suspense>
    </div>
  );
};

export default FlashSale;
