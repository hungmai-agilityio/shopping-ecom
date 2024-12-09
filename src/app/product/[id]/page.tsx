import { Metadata } from 'next';

// Constants
import { popping } from '@/constants';

// Components
import { Breadcrumb, Tag } from '@/ui/components';

// Sections
import { ProductDetail, ProductSection } from '@/ui/sections';

// Libs
import { getProductId, getUserCookie } from '@/libs';
import { Suspense } from 'react';

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

  const queryCategory = product.category ? `?category=${product.category}` : '';

  return (
    <div className={`${popping.className} mt-10`}>
      <section className="container">
        <Breadcrumb customLastName={product.name} />
        <ProductDetail user={user} product={product} />
      </section>

      <section className="my-20 container">
        <Tag label="Related Item" />
        <div className="mt-10">
          <Suspense key={product.category} fallback={<>Loading</>}>
            <ProductSection user={user} query={queryCategory} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
