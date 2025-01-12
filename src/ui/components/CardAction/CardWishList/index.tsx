'use client';

import { IProduct } from '@/interface';
import { memo, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Hooks
import {
  useAddDataToCart,
  useRemoveFromWishlist,
  useUpdateDataToCart
} from '@/hooks';

// Components
import { CardProduct } from '@/ui/components';

// Libs
import { addOrUpdateCart } from '@/libs';

// Constants
import { MESSAGE_API, STATUS } from '@/constants';
import { useToast } from '@/stores/toast';

interface CardWishListProps {
  product: IProduct;
  userId: string;
  wishListId: string;
}

const CardWishList = memo(
  ({ product, userId, wishListId }: CardWishListProps) => {
    const router = useRouter();

    const removeFromWishlist = useRemoveFromWishlist();
    const updateDataToCart = useUpdateDataToCart();
    const addToCart = useAddDataToCart();
    const toast = useToast();

    /**
     * Handle adding or updating a product in the cart.
     * @param {IProduct} product
     */
    const handleAddToCart = useCallback(
      async (product: IProduct) => {
        const status = await addOrUpdateCart(
          userId,
          product,
          addToCart.mutate,
          updateDataToCart.mutate
        );

        if (status === STATUS.SUCCESS) {
          toast.success(MESSAGE_API.ADD_PRODUCT_SUCCESS);
        }
      },
      [userId]
    );

    /**
     * Handle removing an item from the wishlist by its id.
     * @param {string} id - The id of the wishlist item to remove.
     */
    const handleRemoveWishList = useCallback(
      (wishListId: string) => {
        if (wishListId) {
          removeFromWishlist.mutate(wishListId);
        }
      },
      [removeFromWishlist]
    );
    /**
     * Handle redirecting to the product detail page using productId
     * @param {string} productId - The id of the product to preview
     */
    const handleRedirectPreview = (productId: string) => {
      router.push(`/product/${productId}`);
    };

    return (
      <>
        <CardProduct
          key={product.id}
          src={product.image}
          alt={product.name}
          icon="icon-delete.svg"
          id={product.id}
          name={product.name}
          price={product.price}
          rating={product.ratings}
          colors={product.colors}
          discount={product.discount}
          isNewProduct={product.isNew}
          selectedColor={product.colors?.[0]}
          oldPrice={product.originalPrice}
          onAdd={handleAddToCart.bind(null, product)}
          onIconClick={handleRemoveWishList.bind(null, wishListId)}
          isShowAction
          onView={handleRedirectPreview.bind(null, product.id)}
        />
      </>
    );
  }
);

export default CardWishList;
