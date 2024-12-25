import { Suspense } from 'react';
import { Metadata } from 'next';

// Libs
import { getProducts, getUserCookie } from '@/libs';

// Components
import { SkeletonProductList, Tag } from '@/ui/components';

// Sections
import { ProductListSelling, WishListSection } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Wishlist'
};
const Wishlist = async () => {
  const user = await getUserCookie();

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
      <WishListSection products={products} user={user} />
      <div className="flex justify-between items-center my-20 container">
        <Tag label="Just For You" />
      </div>
      <Suspense fallback={<SkeletonProductList />}>
        <ProductListSelling user={user} />
      </Suspense>
    </section>
  );
};

export default Wishlist;
