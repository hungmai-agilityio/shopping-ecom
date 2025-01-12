import { ICart, IProduct } from '@/interface';
import { v4 as uuidv4 } from 'uuid';
import { getUserCart } from '@/libs';
import { STATUS } from '@/constants';

/**
 * Adds a product to the cart or updates its quantity if it already exists.
 * @param {string} userId - The ID of the user.
 * @param {IProduct} product - The product to add.
 * @param {(data: ICart) => void} addToCart - Mutation function to add new cart items.
 * @param {(data: { id: string; data: Partial<ICart> }) => void} updateDataToCart - Mutation function to update cart items.
 * @returns {Promise<STATUS.SUCCESS | STATUS.ERROR>} - The result of the operation.
 */
export const addOrUpdateCart = async (
  userId: string,
  product: IProduct,
  addToCart: (data: ICart) => void,
  updateDataToCart: (data: { id: string; data: Partial<ICart> }) => void
): Promise<STATUS.SUCCESS | STATUS.ERROR> => {
  try {
    const cartItems = await getUserCart(userId);

    const existingItem = cartItems.find(
      (cartItem: ICart) =>
        cartItem.productId === product.id && cartItem.userId === userId
    );

    if (existingItem) {
      updateDataToCart({
        id: existingItem.id,
        data: { quantity: existingItem.quantity + 1 }
      });
    }

    if (!existingItem) {
      const newItem: ICart = {
        id: uuidv4(),
        userId,
        productId: product.id,
        color: product.colors?.[0] || '',
        size: product.sizes?.[0] || '',
        quantity: 1
      };
      addToCart(newItem);
    }

    return STATUS.SUCCESS;
  } catch (error) {
    return STATUS.ERROR;
  }
};
