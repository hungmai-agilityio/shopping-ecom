'use client';

import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Constants
import { MESSAGE_API, QUERY, STATUS, TYPE, popping } from '@/constants';

// Interfaces
import { IProduct, IWishlist, ICart } from '@/interface';

// Libs
import { getUserCart, getUserWishList } from '@/libs';
import { useUserStore } from '@/stores';

// Components
import { Button, CardWishList, ToastMessage } from '@/ui/components';

// Hooks
import {
  useAddDataToCart,
  useClearWishlist,
  useUpdateDataToCart
} from '@/hooks';

interface WishlistProps {
  products: IProduct[];
}

const WishListSection = ({ products }: WishlistProps) => {
  const { userId } = useUserStore();

  const [toast, setToast] = useState<{
    status: STATUS;
    message: string;
  } | null>(null);
  const { data: wishlist = [], error: wishlistError } = useQuery<IWishlist[]>({
    queryKey: [QUERY.WISHLIST],
    queryFn: () => getUserWishList(userId!)
  });

  const addToCart = useAddDataToCart();
  const updateDataToCart = useUpdateDataToCart();
  const clearWishlist = useClearWishlist({ wishlist });

  if (wishlistError) {
    return (
      <div className="container my-10">
        <p className="text-center text-primary">
          Error: Failed to fetch wishlist products. Please try again later.
        </p>
      </div>
    );
  }

  // Handle adding all products from the wishlist to the cart and remove all wishlist
  const handleAddAllProduct = useCallback(() => {
    const dataWishlist = wishlist.map((item) => {
      const product = products.find((p) => p.id === item.productId);
      if (!product) return;

      return getUserCart(userId!).then((cartItems) => {
        const existingItem = cartItems.find(
          (cartItem: ICart) =>
            cartItem.productId === product.id &&
            cartItem.color === (product.colors?.[0] || '') &&
            cartItem.size === (product.sizes?.[0] || '')
        );

        if (existingItem) {
          updateDataToCart.mutate({
            id: existingItem.id,
            data: { quantity: existingItem.quantity + 1 }
          });
          return;
        }

        const cartData: ICart = {
          id: uuidv4(),
          userId: userId!,
          productId: product.id,
          color: product.colors?.[0] || '',
          size: product.sizes?.[0] || '',
          quantity: 1
        };

        addToCart.mutate(cartData);
        setToast({
          status: STATUS.SUCCESS,
          message: MESSAGE_API.ADD_PRODUCT_SUCCESS
        });
      });
    });

    Promise.all(dataWishlist).then(() => {
      clearWishlist.mutate();
    });
  }, [wishlist, products, addToCart, userId!]);

  return (
    <section className={`${popping.className}`}>
      <div className="flex justify-between items-center my-20 container">
        <p className="text-xl">Wishlist ({wishlist.length})</p>
        <Button
          variant={TYPE.SECOND}
          onClick={handleAddAllProduct}
          disabled={!wishlist.length}
        >
          Move All To Bag
        </Button>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-2">
          {wishlist.map((item) => {
            const product = products.find((p) => p.id === item.productId);

            if (!product) return null;

            return (
              <CardWishList
                key={item.id}
                image={product.image}
                name={product.name}
                id={item.id}
                productId={item.productId}
                price={product.price}
                ratings={product.ratings}
                colors={product.colors || []}
                sizes={product.sizes || []}
                discount={product.discount}
                isNewProduct={product.isNew}
                originalPrice={product.originalPrice}
                userId={userId!}
              />
            );
          })}
        </div>
      </div>
      {toast && <ToastMessage status={toast.status} message={toast.message} />}
    </section>
  );
};

export default WishListSection;
