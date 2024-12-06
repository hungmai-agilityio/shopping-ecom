'use client';
import { useQuery } from '@tanstack/react-query';

// Constants
import { QUERY, SIZE, TYPE, popping } from '@/constants';

// Interfaces
import { IProduct, IWishlist } from '@/interface';

// Libs
import { getUserWishList } from '@/libs';

// Components
import { Button, CardProduct, ProductList, Tag } from '@/ui/components';

interface WishlistProps {
  products: IProduct[];
  productSelling: IProduct[];
}

const WishListSection = ({ products, productSelling }: WishlistProps) => {
  const { data: wishlist = [], error: wishlistError } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList('4520hft-69210-742376djq')
  });

  if (wishlistError) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch wish list products. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className={`${popping.className}`}>
      <div className="flex justify-between items-center my-20 container">
        <p className="text-xl">Wishlist ({wishlist.length})</p>
        <Button variant={TYPE.SECOND}>Move All To Bag</Button>
      </div>
      <div className="my-10 flex flex-wrap lg:gap-28 gap-10 container lg:justify-normal justify-center">
        {wishlist.map((item) => {
          const product = products.find((p) => p.id === item.productId);

          if (!product) return null;

          return (
            <CardProduct
              key={item.id}
              src={product.image}
              alt={product.name}
              icon="icon-delete.svg"
              id={item.id}
              name={product.name}
              price={product.price}
              rating={product.ratings}
              colors={product.colors}
              discount={product.discount}
              isNewProduct={product.isNew}
              selectedColor={product.colors![0]}
              oldPrice={product.originalPrice}
              onAdd={() => {}}
              onIconClick={() => {}}
            />
          );
        })}
      </div>

      <div className="flex justify-between items-center my-20 container">
        <Tag label="Just For You" />
        <Button variant={TYPE.SECOND} size={SIZE.SMALL}>
          See All
        </Button>
      </div>
      <div className="container">
        <ProductList products={productSelling} isDiscount isNewProduct />
      </div>
    </section>
  );
};

export default WishListSection;
