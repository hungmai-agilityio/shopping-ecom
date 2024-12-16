import { Suspense } from 'react';

// Interfaces
import { ISearchParams } from '@/interface/util';

// Libs
import { getCategories } from '@/libs';

// Components
import { Heading, SkeletonProductList, Tag } from '@/ui/components';

// Sections
import { CategorySection, ProductListCategory } from '@/ui/sections';
import { IUser } from '@/interface';

interface OurProductProps {
  searchParams: ISearchParams;
  user: IUser;
}
const OurProductSection = async ({ searchParams, user }: OurProductProps) => {
  const { data: categories, error } = await getCategories();

  const query = searchParams?.['product-query'] ?? '';
  const queryCategory = query ? `category=${query}` : '';

  return (
    <>
      <Tag label="Our Products" />
      <Heading styles="my-10">Explore Our Products</Heading>
      {error ? (
        ''
      ) : (
        <CategorySection
          categories={categories || []}
          queryParam="product-query"
        />
      )}
      <div className="mt-10">
        <Suspense key={queryCategory} fallback={<SkeletonProductList />}>
          <ProductListCategory user={user} query={queryCategory} />
        </Suspense>
      </div>
    </>
  );
};

export default OurProductSection;
