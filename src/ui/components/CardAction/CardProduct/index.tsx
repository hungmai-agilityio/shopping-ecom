'use client';

import { ICart, IWishlist } from '@/interface';
import { memo, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

// Hooks
import {
  useAddDataToCart,
  useAddToWishlist,
  useRemoveFromWishlist,
  useUpdateDataToCart,
  useWishlistData
} from '@/hooks';

// Components
import { CardProduct } from '@/ui/components';

// Libs
import { getUserCart } from '@/libs';

// Constants
import { END_POINT, MESSAGE_API } from '@/constants';
import { useToast } from '@/stores/toast';

interface CardProductActionProps {
  colors: string[];
  sizes: string[];
  discount?: number;
  id: string;
  image: string;
  isDiscount?: boolean;
  isNew?: boolean;
  isNewProduct?: boolean;
  name: string;
  originalPrice?: number;
  price: number;
  ratings: number;
  userId: string;
}

const CardProductAction = memo(
  ({
    colors = [],
    sizes,
    discount,
    id,
    image,
    isDiscount,
    isNew,
    isNewProduct,
    name,
    originalPrice,
    price,
    ratings,
    userId
  }: CardProductActionProps) => {
    const toast = useToast();
    const addToWishlist = useAddToWishlist();
    const removeFromWishlist = useRemoveFromWishlist();
    const updateDataToCart = useUpdateDataToCart();
    const addToCart = useAddDataToCart();
    const router = useRouter();

    const { data: wishlist } = useWishlistData(userId);

    const isProductInWishlist = (productId: string) =>
      wishlist.some((item) => item.productId === productId);

    // Handle toggle add/remove product favorite
    const handleToggleFavorite = useCallback(() => {
      if (isProductInWishlist(id)) {
        const wishlistItem = wishlist.find((item) => item.productId === id);
        if (wishlistItem) {
          removeFromWishlist.mutate(wishlistItem.id);
        }
        return;
      }

      const newItem: IWishlist = {
        id: uuidv4(),
        userId: userId,
        productId: id
      };

      addToWishlist.mutate(newItem);
    }, [id, userId, wishlist, removeFromWishlist, addToWishlist]);

    /**
     * Handle adding a product to the cart.
     * If the product already exists in the cart, its quantity is incremented by 1.
     * If not, a new cart item is added.
     * @param {string} productId
     */
    const handleAddToCart = useCallback(
      async (productId: string) => {
        const cartItems = await getUserCart(userId);

        const existingItem = cartItems.find(
          (cartItem: ICart) =>
            cartItem.productId === productId && cartItem.userId === userId
        );

        if (existingItem) {
          updateDataToCart.mutate({
            id: existingItem.id,
            data: { quantity: existingItem.quantity + 1 }
          });
          toast.success(MESSAGE_API.UPDATE_QUANTITY);
        }
        if (!existingItem) {
          const newItem: ICart = {
            id: uuidv4(),
            userId: userId,
            productId: productId,
            color: colors[0],
            size: sizes[0],
            quantity: 1
          };
          addToCart.mutate(newItem);
          toast.success(MESSAGE_API.ADD_PRODUCT_SUCCESS);
        }
      },
      [userId]
    );

    const handleRedirectPreview = (id: string) => {
      router.push(`${END_POINT.PRODUCT}/${id}`);
    };

    return (
      <>
        <CardProduct
          alt={name}
          colors={colors}
          discount={isDiscount ? discount : undefined}
          icon={isProductInWishlist(id) ? '/heart-red.svg' : '/heart.svg'}
          id={id}
          isNewProduct={isNewProduct ? isNew : undefined}
          isShowAction={!!userId}
          key={id}
          name={name}
          oldPrice={originalPrice}
          onAdd={handleAddToCart}
          onIconClick={handleToggleFavorite}
          price={price}
          rating={ratings}
          selectedColor={colors[0]}
          src={image}
          onView={handleRedirectPreview}
        />
      </>
    );
  }
);

export default CardProductAction;
