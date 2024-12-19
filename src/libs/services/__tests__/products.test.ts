import { getProducts, getProductLimit, getProductId } from '@/libs';
import { END_POINT } from '@/constants';
import { mockProducts } from '@/mock';

(global.fetch as jest.Mock) = jest.fn();

describe('Product API Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should fetch all products without a query', async () => {

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const result = await getProducts();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.PRODUCTS}`
    );
    expect(result).toEqual({ data: mockProducts, error: null });
  });

  test('Should fetch products with start and limit', async () => {

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProducts,
    });

    const query = 'category=phone';
    const start = 0;
    const limit = 2;
    const result = await getProductLimit(query, start, limit);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.PRODUCTS}?${query}&_start=${start}&_limit=${limit}`
    );
    expect(result).toEqual({ data: mockProducts, error: null });
  });

  test('Should fetch a single product by ID', async () => {
    const mockProduct = { id: '1', name: 'Product Test' };
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockProduct,
    });

    const id = '1';
    const result = await getProductId(id);

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.PRODUCTS}/${id}`
    );
    expect(result).toEqual({ data: mockProduct });
  });
});
