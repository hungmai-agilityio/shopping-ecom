'use client';

import { ICart, IUser } from '@/interface';
import { memo, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

// Hooks
import {
  useAddDataToCart,
  useRemoveFromWishlist,
  useUpdateDataToCart
} from '@/hooks';

// Components
import { CardProduct, ToastMessage } from '@/ui/components';

// Libs
import { getUserCart } from '@/libs';

// Constants
import { END_POINT, MESSAGE_API, STATUS } from '@/constants';

interface CardWishListProps {
  colors: string[];
  sizes: string[];
  discount?: number;
  id: string;
  productId: string;
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

const CardWishList = memo(
  ({
    colors = [],
    sizes = [],
    discount,
    id,
    productId,
    image,
    isNewProduct,
    name,
    originalPrice,
    price,
    ratings,
    userId
  }: CardWishListProps) => {
    const [toast, setToast] = useState<{
      status: STATUS;
      message: string;
    } | null>(null);
    const router = useRouter();

    const removeFromWishlist = useRemoveFromWishlist();
    const updateDataToCart = useUpdateDataToCart();
    const addToCart = useAddDataToCart();

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

          setToast({
            status: STATUS.SUCCESS,
            message: MESSAGE_API.UPDATE_QUANTITY
          });
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
          setToast({
            status: STATUS.SUCCESS,
            message: MESSAGE_API.ADD_PRODUCT_SUCCESS
          });
        }
      },
      [userId]
    );

    /**
     * Handle removing an item from the wishlist by its id.
     * @param {string} id - The id of the wishlist item to remove.
     */
    const handleRemoveWishList = useCallback(
      (id: string) => {
        if (id) {
          removeFromWishlist.mutate(id);
        }
      },
      [removeFromWishlist]
    );

    /**
     * Handle redirecting to the product detail page using productId
     * @param {string} productId - The id of the product to preview
     */
    const handleRedirectPreview = (productId: string) => {
      router.push(`${END_POINT.PRODUCT}/${productId}`);
    };

    return (
      <>
        <CardProduct
          key={id}
          src={image}
          alt={name}
          icon="icon-delete.svg"
          id={id}
          name={name}
          price={price}
          rating={ratings}
          colors={colors}
          discount={discount}
          isNewProduct={isNewProduct}
          selectedColor={colors![0]}
          oldPrice={originalPrice}
          onAdd={handleAddToCart.bind(null, productId)}
          onIconClick={handleRemoveWishList}
          isShowAction
          onView={handleRedirectPreview.bind(null, productId)}
        />
        {toast && (
          <ToastMessage status={toast.status} message={toast.message} />
        )}
      </>
    );
  }
);

export default CardWishList;
