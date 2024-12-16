import { getProductLimit } from '@/libs';
import { IUser } from '@/interface';
import { ProductList } from '@/ui/sections';

interface ProductListProps {
  user: IUser;
  query?: string;
}

const ProductListCategory = async ({ user, query }: ProductListProps) => {
  const { data, error } = await getProductLimit(`${query}`, 0, 8);

  if (error) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch product data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap lg:gap-x-32 gap-14 lg:justify-normal justify-center">
      <ProductList user={user} products={data} />
    </div>
  );
};

export default ProductListCategory;
