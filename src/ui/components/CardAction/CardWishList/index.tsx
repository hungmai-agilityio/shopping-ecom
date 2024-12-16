'use client';

import { ICart, IUser } from '@/interface';
import { memo, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
import { MESSAGE_API, STATUS } from '@/constants';

interface CardWishListProps {
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

const CardWishList = memo(
  ({
    colors = [],
    discount,
    id,
    image,
    isNewProduct,
    name,
    originalPrice,
    price,
    ratings,
    user
  }: CardWishListProps) => {
    const [toast, setToast] = useState<{
      status: STATUS;
      message: string;
    } | null>(null);

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
            userId: user!.id,
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
          onAdd={handleAddToCart.bind(null)}
          onIconClick={handleRemoveWishList}
          isShowAction
        />
        {toast && (
          <ToastMessage status={toast.status} message={toast.message} />
        )}
      </>
    );
  }
);

export default CardWishList;
