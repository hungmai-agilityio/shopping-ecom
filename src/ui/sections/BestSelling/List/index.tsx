// Libs
import { getProductLimit, getUserCookie } from '@/libs';

// Sections
import { ProductList } from '@/ui/sections';

// Components
import { ButtonShowMore } from '@/ui/components';

interface ProductListProps {
  page?: number;
}

const ProductListSelling = async ({ page = 0 }: ProductListProps) => {
  const user = await getUserCookie();

  const limit = 4;
  const { data, error } = await getProductLimit(
    'bestSelling=true',
    page,
    limit
  );

  if (error) {
    return (
      <div className="container">
        <p className="text-center text-primary">
          Error: Failed to fetch product data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <>
      <ProductList userId={user} products={data} />
      <ButtonShowMore
        queryKey="bestSelling=true"
        userId={user}
        startQuery={limit}
      />
    </>
  );
};

export default ProductListSelling;
