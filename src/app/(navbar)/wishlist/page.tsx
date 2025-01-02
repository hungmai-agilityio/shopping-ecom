import { Suspense } from 'react';
import { Metadata } from 'next';

// Libs
import { getProducts } from '@/libs';

// Components
import { SkeletonProductList, Tag } from '@/ui/components';

// Sections
import { ProductListSelling, WishListSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Save and manage your favorite products for future purchases'
};
const Wishlist = async () => {
  const { data: products, error: errorProduct } = await getProducts();

  if (errorProduct) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch products. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="container lg:px-0 px-4">
      <WishListSection products={products} />
      <div className="flex justify-between items-center my-20 container">
        <Tag label="Just For You" />
      </div>
      <Suspense fallback={<SkeletonProductList />}>
        <ProductListSelling />
      </Suspense>
    </section>
  );
};

export default Wishlist;
