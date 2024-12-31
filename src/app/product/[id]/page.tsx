import { Suspense } from 'react';
import { Metadata } from 'next';

// Constants
import { popping } from '@/constants';

// Components
import { Breadcrumb, SkeletonProductList, Tag } from '@/ui/components';

// Sections
import { ProductDetail, ProductListCategory } from '@/ui/sections';

// Libs
import { getProductId, getUserCookie } from '@/libs';

interface Params {
  id: string;
}

export const generateMetadata = async ({
  params
}: {
  params: Params;
}): Promise<Metadata> => {
  const { id } = params;
  const { data: product } = await getProductId(id);

  return {
    title: product.name || 'Product Detail'
  };
};

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const { id } = params;

  const { data: product } = await getProductId(id);
  const user = getUserCookie();

  const queryCategory = product.category ? `category=${product.category}` : '';

  return (
    <div className={`${popping.className} mt-10 lg:px-0 px-4`}>
      <section className="container">
        <Breadcrumb customLastName={product.name} />
        <ProductDetail userId={user} product={product} />
      </section>
      <section className="my-20 container">
        <Tag label="Related Item" />
        <div className="mt-10">
          <Suspense key={product.category} fallback={<SkeletonProductList />}>
            <ProductListCategory user={user} query={queryCategory} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
