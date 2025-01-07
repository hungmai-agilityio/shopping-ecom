import { Suspense } from 'react';

// Libs
import { getCategories } from '@/libs';

// Components
import { SkeletonProductList } from '@/ui/components';

// Sections
import { CategorySection, ProductListCategory } from '@/ui/sections';

interface OurProductProps {
  page: number;
  queryCategory: string;
}

const OurProductList = async ({ page, queryCategory }: OurProductProps) => {
  const { data: categories, error } = await getCategories(
    `?&_start=${page}&_limit=${4}`
  );

  return (
    <div>
      {error ? (
        ''
      ) : (
        <CategorySection
          categories={categories || []}
          queryParam="product-query"
        />
      )}
      <div className="mt-10">
        <Suspense fallback={<SkeletonProductList />}>
          <ProductListCategory query={queryCategory} />
        </Suspense>
      </div>
    </div>
  );
};

export default OurProductList;
