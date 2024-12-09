import { getProducts, getUserCookie } from '@/libs';
import { Breadcrumb } from '@/ui/components';
import BillingDetails from '@/ui/sections/BillingDetail';
import CartOrder from '@/ui/sections/Cart/Order';

const Checkout = async () => {
  const user = await getUserCookie();
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
    <div className="container">
      <section className="my-20">
        <Breadcrumb />
      </section>
      <section className="flex justify-between items-center gap-10">
        <div className="flex-1">
          <BillingDetails user={user} />
        </div>
        <div className="flex-1">
          <CartOrder products={data} user={user} />
        </div>
      </section>
    </div>
  );
};

export default Checkout;
