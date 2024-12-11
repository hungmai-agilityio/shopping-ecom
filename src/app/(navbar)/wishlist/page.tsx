// Libs
import { getProductLimit, getProducts, getUserCookie } from '@/libs';

// Sections
import WishListSection from '@/ui/sections/WishList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wishlist'
};
const Wishlist = async () => {
  const user = await getUserCookie();

  const { data: products, error: errorProduct } = await getProducts();
  const { data: selling, error: errorSelling } = await getProductLimit(
    'bestSelling=true',
    0,
    4
  );

  if (errorProduct) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch products. Please try again later.
        </p>
      </div>
    );
  }

  if (errorSelling) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch best-selling products. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <WishListSection products={products} user={user} productSelling={selling} />
  );
};

export default Wishlist;
