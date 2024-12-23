import { IProduct, IUser } from '@/interface';
import { CardProductAction } from '@/ui/components';

interface ProductListProps {
  user: IUser;
  products: IProduct[];
}

const ProductList = async ({ user, products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap lg:gap-x-32 gap-14 justify-center">
      {products.map((product: IProduct) => (
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
          user={user}
          originalPrice={product.originalPrice}
          isNewProduct={product.isNew}
        />
      ))}
    </div>
  );
};

export default ProductList;
