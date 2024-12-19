import { addCartData, updateCart, deleteCart } from '@/libs';
import { END_POINT } from '@/constants';
import { mockCart } from '@/mock';

(global.fetch as jest.Mock) = jest.fn();

describe('Cart API Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should add a new cart item', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockCart[0]
    });

    const result = await addCartData(mockCart[0]);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.CART}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mockCart[0])
      }
    );
    expect(result).toEqual({ data: mockCart[0], error: null });
  });

  test('Should update an existing cart item', async () => {
    const updatedData = { quantity: 3 };
    const mockResponse = { data: { ...mockCart[0], ...updatedData } };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    const result = await updateCart(mockCart[0].id, updatedData);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.CART}/${mockCart[0].id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
      }
    );
    expect(result).toEqual({ data: mockResponse, error: null });
  });

  test('Should delete a cart item', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    const result = await deleteCart(mockCart[0].id);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.CART}/${mockCart[0].id}`,
      {
        method: 'DELETE'
      }
    );
    expect(result).toEqual({ success: true });
  });
});
