// Interfaces
import { IUser } from '@/interface';

// Libs
import { getProductLimit } from '@/libs';

// Components
import { Heading, ProductList, Tag } from '@/ui/components';

interface SellingProp {
  user: IUser;
}

const BestSelling = async ({ user }: SellingProp) => {
  const { data, error } = await getProductLimit('bestSelling=true', 0, 4);

  return (
    <div className="container my-20">
      <Tag label="This Month" />

      <div className="my-12">
        <Heading>Best Selling Products</Heading>
      </div>

      {error ? (
        <p className="text-center text-5xl text-primary">
          Unable to load products! Try later
        </p>
      ) : (
        <ProductList
          products={data}
          query={'bestSelling=true'}
          isShowMore
          user={user}
        />
      )}
    </div>
  );
};

export default BestSelling;
