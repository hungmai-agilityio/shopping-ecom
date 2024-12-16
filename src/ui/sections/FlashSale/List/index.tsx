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
  page?: number;
}

const ProductListFlashSale = async ({ user, page = 0 }: ProductListProps) => {
  const limit = 4;
  const { data, error } = await getProductLimit(
    'isFlashSale=true',
    page,
    limit
  );

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
      <ButtonShowMore
        queryKey="isFlashSale=true"
        user={user}
        startQuery={limit}
      />
    </div>
  );
};

export default ProductListFlashSale;
