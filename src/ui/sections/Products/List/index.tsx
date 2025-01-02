import { IProduct } from '@/interface';
import { CardProductAction } from '@/ui/components';

interface ProductListProps {
  userId: string;
  products: IProduct[];
}

const ProductList = async ({ userId, products }: ProductListProps) => {
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2">
        {products?.map((product: IProduct) => (
          <CardProductAction
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            ratings={product.ratings}
            colors={product.colors || []}
            sizes={product.sizes || []}
            isDiscount={product.discount !== undefined}
            discount={product.discount}
            isNew={product.isNew}
            userId={userId}
            originalPrice={product.originalPrice}
            isNewProduct={product.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
