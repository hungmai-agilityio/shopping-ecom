// Libs
import { IProduct } from '@/interface';
import { getProducts } from '@/libs';

// Components
import { ProductList } from '@/ui/components';

interface ProductSectionProps {
  query?: string;
  isShowMore?: boolean;
}

const ProductSection = async ({ query, isShowMore }: ProductSectionProps) => {
  const param = query ? query : '';

  const { data: products, error } = await getProducts(param);

  const visibleCount = 8;
  const filtered = products as IProduct[];
  const data = filtered.slice(0, visibleCount);

  return (
    <div className="container my-20">
      {error ? (
        <p className="text-center text-5xl text-primary">
          Unable to load products! Try later
        </p>
      ) : (
        <ProductList products={data} isShowMore={isShowMore} query={param} />
      )}
    </div>
  );
};

export default ProductSection;
