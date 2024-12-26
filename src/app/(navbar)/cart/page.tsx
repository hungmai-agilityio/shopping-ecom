import { getProducts, getUserCookie } from '@/libs';
import { Breadcrumb } from '@/ui/components';
import { CartSection } from '@/ui/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'View and manage items in your shopping cart before checkout'
};

const Cart = async () => {
  const { data: products, error: errorProduct } = await getProducts();
  const user = await getUserCookie();

  if (errorProduct) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch product data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container my-20">
      <Breadcrumb />
      <CartSection products={products} user={user} />
    </div>
  );
};

export default Cart;
