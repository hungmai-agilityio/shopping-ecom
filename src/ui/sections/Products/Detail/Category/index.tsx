// Libs
import { getProductLimit } from '@/libs';

// Interfaces
import { IUser } from '@/interface';

// Sections
import { ProductList } from '@/ui/sections';

// Components
import { ButtonShowMore } from '@/ui/components';

interface ProductListProps {
  user: IUser;
  query?: string;
}

const ProductListCategory = async ({ user, query }: ProductListProps) => {
  const limit = 8;
  const { data, error } = await getProductLimit(`${query}`, 0, limit);

  if (error) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">Error loading data</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap lg:gap-x-32 gap-14 lg:justify-normal justify-center">
      <ProductList user={user} products={data} />
      <ButtonShowMore user={user} queryKey={query} startQuery={limit} />
    </div>
  );
};

export default ProductListCategory;
