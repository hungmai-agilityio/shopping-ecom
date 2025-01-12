'use client';

import { useCallback } from 'react';

// Constants
import { MESSAGE_API, TYPE, popping } from '@/constants';

// Interfaces
import { IProduct } from '@/interface';

// Libs
import { addOrUpdateCart } from '@/libs';
import { useUserStore } from '@/stores';

// Components
import { Button } from '@/ui/components';
import { WishlistList } from '@/ui/sections';

// Hooks
import {
  useAddDataToCart,
  useClearWishlist,
  useUpdateDataToCart,
  useWishlistData
} from '@/hooks';
import { useToast } from '@/stores/toast';

interface WishlistProps {
  products: IProduct[];
}

const WishListSection = ({ products }: WishlistProps) => {
  const { userId } = useUserStore();
  const { data: wishlist } = useWishlistData(userId!);

  const toast = useToast();
  const addToCart = useAddDataToCart();
  const updateDataToCart = useUpdateDataToCart();
  const { mutate, isPending } = useClearWishlist({ wishlist });

  // Handle adding all products from the wishlist to the cart and remove all wishlist
  const handleAddAllProduct = useCallback(async () => {
    const dataWishlist = await Promise.all(
      wishlist.map(async (item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return;

        await addOrUpdateCart(
          userId!,
          product,
          addToCart.mutate,
          updateDataToCart.mutate
        );
      })
    );

    if (dataWishlist) {
      mutate();

      toast.success(MESSAGE_API.ADD_PRODUCT_SUCCESS);
    }
  }, [wishlist, products, addToCart, updateDataToCart, userId]);

  return (
    <section className={`${popping.className}`}>
      <div className="flex justify-between items-center my-20 container">
        <p className="text-xl">Wishlist ({wishlist.length})</p>
        <Button
          variant={TYPE.SECOND}
          onClick={handleAddAllProduct}
          disabled={!wishlist.length || isPending}
        >
          Move All To Bag
        </Button>
      </div>
      <WishlistList wishlist={wishlist} products={products} userId={userId!} />
    </section>
  );
};

export default WishListSection;
