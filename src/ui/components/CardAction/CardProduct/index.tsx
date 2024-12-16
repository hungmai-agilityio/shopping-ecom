'use client';

import { ICart, IUser, IWishlist } from '@/interface';
import { memo, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

// Hooks
import {
  useAddDataToCart,
  useAddToWishlist,
  useRemoveFromWishlist,
  useUpdateDataToCart
} from '@/hooks';

// Components
import { CardProduct, ToastMessage } from '@/ui/components';

// Libs
import { getUserCart, getUserWishList } from '@/libs';

// Constants
import { END_POINT, MESSAGE_API, QUERY, STATUS } from '@/constants';
import { useQuery } from '@tanstack/react-query';

interface CardProductActionProps {
  colors: string[];
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
  user: IUser;
}

const CardProductAction = memo(
  ({
    colors = [],
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
    user
  }: CardProductActionProps) => {
    const [toast, setToast] = useState<{
      status: STATUS;
      message: string;
    } | null>(null);

    const addToWishlist = useAddToWishlist();
    const removeFromWishlist = useRemoveFromWishlist();
    const updateDataToCart = useUpdateDataToCart();
    const addToCart = useAddDataToCart();
    const router = useRouter();

    const { data: wishlist = [] } = useQuery<IWishlist[]>({
      queryKey: [QUERY.WISHLIST],
      queryFn: () => getUserWishList(user.id),
      enabled: !!user
    });

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
        userId: user.id,
        productId: id
      };

      addToWishlist.mutate(newItem);
    }, [id, user, wishlist, removeFromWishlist, addToWishlist]);

    /**
     * Handle adding a product to the cart.
     * If the product already exists in the cart, its quantity is incremented by 1.
     * If not, a new cart item is added.
     * @param {string} productId
     */
    const handleAddToCart = useCallback(
      async (productId: string) => {
        const cartItems = await getUserCart(user!.id);

        const existingItem = cartItems.find(
          (cartItem: ICart) =>
            cartItem.productId === productId && cartItem.userId === user?.id
        );

        if (existingItem) {
          updateDataToCart.mutate({
            id: existingItem.id,
            data: { quantity: existingItem.quantity + 1 }
          });

          setToast({
            status: STATUS.SUCCESS,
            message: MESSAGE_API.UPDATE_QUANTITY
          });
        }
        if (!existingItem) {
          const newItem: ICart = {
            id: uuidv4(),
            userId: user.id,
            productId: productId,
            color: '',
            size: '',
            quantity: 1
          };
          addToCart.mutate(newItem);
          setToast({
            status: STATUS.SUCCESS,
            message: MESSAGE_API.ADD_PRODUCT_SUCCESS
          });
        }
      },
      [user]
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
          isShowAction={!!user}
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
        {toast && (
          <ToastMessage status={toast.status} message={toast.message} />
        )}
      </>
    );
  }
);

export default CardProductAction;
