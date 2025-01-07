import { Suspense } from 'react';
import { Metadata } from 'next';

// Constants
import { END_POINT, popping } from '@/constants';

// Components
import { Breadcrumb, SkeletonProductList, Tag } from '@/ui/components';

// Sections
import { ProductDetail, ProductListCategory } from '@/ui/sections';

// Libs
import { getProductId, getProducts } from '@/libs';

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const { data: products } = await getProducts();
  return products?.map((product: { id: string }) => ({ id: product.id })) || [];
}

const fetchProductDetail = async (id: string) => {
  const { data, error } = await getProductId(id);
  if (error) throw new Error('Error fetching product details');
  return data;
};

export const generateMetadata = async ({
  params
}: {
  params: Params;
}): Promise<Metadata> => {
  const { id } = params;
  const { data: product } = await getProductId(id);

  return {
    title: product?.name || 'Product Detail'
  };
};

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const { id } = params;
  const product = await fetchProductDetail(id);
  const queryCategory = product?.category ? `category=${product.category}` : '';

  return (
    <div className={`${popping.className} mt-10 lg:px-0 px-4`}>
      <section className="container">
        <Breadcrumb customLastName={product?.name} />
        <ProductDetail product={product} />
      </section>
      <section className="my-20 container">
        <Tag label="Related Item" />
        <div className="mt-10">
          <Suspense key={product?.category} fallback={<SkeletonProductList />}>
            <ProductListCategory query={queryCategory} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
