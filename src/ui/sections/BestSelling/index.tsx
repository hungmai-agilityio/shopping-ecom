import { Suspense } from 'react';

// Interfaces
import { ISearchParams, IUser } from '@/interface';

// Components
import {
  Heading,
  PaginationProduct,
  SkeletonProductList,
  Tag
} from '@/ui/components';
import { ProductListSelling } from '@/ui/sections';

interface SellingProp {
  searchParams: ISearchParams;
}

const BestSellingSection = async ({ searchParams }: SellingProp) => {
  const start = parseInt(searchParams['best-selling-page'] || '0', 10);
  return (
    <section className="my-20">
      <Tag label="This Month" />

      <div className="my-12 md:flex justify-between lg:gap-28 gap-9 items-end">
        <Heading>Best Selling Products</Heading>
        <PaginationProduct queryPage="best-selling-page" start={start} />
      </div>
      <Suspense key={start} fallback={<SkeletonProductList />}>
        <ProductListSelling page={start} />
      </Suspense>
    </section>
  );
};

export default BestSellingSection;
