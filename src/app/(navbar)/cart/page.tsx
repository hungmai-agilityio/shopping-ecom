import { getProducts } from '@/libs';
import { Breadcrumb } from '@/ui/components';
import { CartSection } from '@/ui/sections';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'View and manage items in your shopping cart before checkout'
};

const Cart = async () => {
  const { data: products, error: errorProduct } = await getProducts();

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
    <div className="container my-20 lg:px-0 px-4">
      <Breadcrumb />
      <CartSection products={products} />
    </div>
  );
};

export default Cart;
