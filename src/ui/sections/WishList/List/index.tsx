import { IProduct, IWishlist } from '@/interface';
import { CardWishList } from '@/ui/components';

interface WishlistListProps {
  wishlist: IWishlist[];
  products: IProduct[];
  userId: string;
}

const WishlistList = ({ wishlist, products, userId }: WishlistListProps) => {
  return (
    <div className="flex justify-center">
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2">
        {wishlist.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;

          return (
            <CardWishList
              key={item.id}
              userId={userId}
              product={product}
              wishListId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishlistList;
