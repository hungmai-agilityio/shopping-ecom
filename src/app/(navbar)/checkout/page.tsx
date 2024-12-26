import { Metadata } from 'next';

// Libs
import { getProducts, getUserCookie, getUserId } from '@/libs';

// Component
import { Breadcrumb } from '@/ui/components';

// Sections
import { CartOrder, BillingMenu } from '@/ui/sections';

export const metadata: Metadata = {
  title: 'Checkout',
  description:
    'Review your shipping details, order summary, and total amount before completing your purchase'
};

const Checkout = async () => {
  const userCookie = await getUserCookie();
  const user = await getUserId(userCookie.id);
  const { data, error } = await getProducts();

  if (error) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch products. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="container lg:px-0 px-4">
      <section className="my-20">
        <Breadcrumb />
      </section>
      <section className="md:flex justify-between items-center gap-10 relative">
        <div className="flex-1">
          <BillingMenu user={user} />
        </div>
        <div className="flex-1">
          <CartOrder products={data} user={user} />
        </div>
      </section>
    </div>
  );  
};

export default Checkout;
