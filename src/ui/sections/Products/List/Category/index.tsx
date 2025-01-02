// Libs
import { getProductLimit } from '@/libs';

// Interfaces
import { IUser } from '@/interface';

// Sections
import { ProductList } from '@/ui/sections';

// Components
import { ButtonShowMore } from '@/ui/components';

interface ProductListProps {
  user: string;
  query?: string;
}

const ProductListCategory = async ({ user, query }: ProductListProps) => {
  const limit = 8;
  const { data, error } = await getProductLimit(`${query}`, 0, limit);

  if (error) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      <ProductList userId={user} products={data} />
      <ButtonShowMore userId={user} queryKey={query} startQuery={limit} />
    </>
  );
};

export default ProductListCategory;
