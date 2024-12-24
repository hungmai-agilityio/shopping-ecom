import { Suspense } from 'react';

// Interfaces
import { ISearchParams } from '@/interface/util';

// Libs
import { getCategories } from '@/libs';

// Components
import {
  Heading,
  PaginationProduct,
  SkeletonProductList,
  Tag
} from '@/ui/components';

// Sections
import { CategorySection, ProductListCategory } from '@/ui/sections';
import { IUser } from '@/interface';

interface OurProductProps {
  page: number;
  user: IUser;
  queryCategory: string;
}

const OurProductList = async ({
  page,
  user,
  queryCategory
}: OurProductProps) => {
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
          <ProductListCategory user={user} query={queryCategory} />
        </Suspense>
      </div>
    </div>
  );
};

export default OurProductList;
