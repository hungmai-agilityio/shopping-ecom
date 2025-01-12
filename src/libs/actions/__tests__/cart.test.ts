import { addOrUpdateCart } from '@/libs/actions/cart';
import { getUserCart } from '@/libs';
import { STATUS } from '@/constants';
import { ICart } from '@/interface';
import { mockProduct } from '@/mock';

jest.mock('@/libs');

describe('addOrUpdateCart function', () => {
  const mockUserId = 'user1';

  const mockCartItems: ICart[] = [
    {
      id: 'cart1',
      userId: mockUserId,
      productId: mockProduct.id,
      quantity: 2,
      color: 'Red',
      size: 'S'
    }
  ];

  const mockAddToCart = jest.fn();
  const mockUpdateDataToCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (getUserCart as jest.Mock).mockResolvedValue(mockCartItems);
  });

  test('updates quantity if product already exists in cart', async () => {
    const result = await addOrUpdateCart(
      mockUserId,
      mockProduct,
      mockAddToCart,
      mockUpdateDataToCart
    );

    expect(result).toBe(STATUS.SUCCESS);
    expect(mockUpdateDataToCart).toHaveBeenCalledWith({
      id: 'cart1',
      data: { quantity: 3 }
    });
  });

  test('adds new product to the cart if product does not exist', async () => {
    (getUserCart as jest.Mock).mockResolvedValue([]);

    const result = await addOrUpdateCart(
      mockUserId,
      mockProduct,
      mockAddToCart,
      mockUpdateDataToCart
    );

    expect(result).toBe(STATUS.SUCCESS);
    expect(mockAddToCart).toHaveBeenCalledWith({
      id: expect.any(String),
      userId: mockUserId,
      productId: mockProduct.id,
      color: 'red',
      size: 'M',
      quantity: 1
    });
  });

  test('returns error status if an error occurs', async () => {
    (getUserCart as jest.Mock).mockRejectedValue(
      new Error('Failed to get cart')
    );

    const result = await addOrUpdateCart(
      mockUserId,
      mockProduct,
      mockAddToCart,
      mockUpdateDataToCart
    );

    expect(result).toBe(STATUS.ERROR);
    expect(mockAddToCart).not.toHaveBeenCalled();
    expect(mockUpdateDataToCart).not.toHaveBeenCalled();
  });
});
