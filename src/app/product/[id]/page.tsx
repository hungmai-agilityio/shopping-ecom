import { Suspense } from 'react';
import next, { Metadata } from 'next';

// Constants
import { END_POINT, popping } from '@/constants';

// Components
import { Breadcrumb, SkeletonProductList, Tag } from '@/ui/components';

// Sections
import { ProductDetail, ProductListCategory } from '@/ui/sections';

// Libs
import { getProductId } from '@/libs';

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/${END_POINT.PRODUCTS}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.statusText}`);
      }
      return res.json();
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
      return [];
    });

  if (!Array.isArray(products)) {
    console.error('API response is not an array:', products);
    throw new Error('API response is not an array');
  }

  return products.map((product: { id: string }) => ({
    id: product.id
  }));
}

const fetchProductDetail = async (id: string) => {
  const { data } = await getProductId(id);
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
    title: product.name || 'Product Detail'
  };
};

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const { id } = params;
  const product = await fetchProductDetail(id);
  const queryCategory = product.category ? `category=${product.category}` : '';

  return (
    <div className={`${popping.className} mt-10 lg:px-0 px-4`}>
      <section className="container">
        <Breadcrumb customLastName={product.name} />
        <ProductDetail product={product} />
      </section>
      <section className="my-20 container">
        <Tag label="Related Item" />
        <div className="mt-10">
          <Suspense key={product.category} fallback={<SkeletonProductList />}>
            <ProductListCategory query={queryCategory} />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
