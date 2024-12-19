import { getCategories } from '@/libs';
import { END_POINT } from '@/constants';
import { categories } from '@/mock';

(global.fetch as jest.Mock) = jest.fn();

describe('Category API Service Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should fetch categories successfully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => categories
    });

    const result = await getCategories();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.CATEGORY}`
    );
    expect(result).toEqual({ data: categories, error: null });
  });

  test('Should handle thrown error when fetching categories', async () => {
    const mockError = new Error('Network Error');
    (fetch as jest.Mock).mockRejectedValueOnce(mockError);

    const result = await getCategories();

    expect(fetch).toHaveBeenCalledWith(
      `${process.env.NEXT_PUBLIC_URL}${END_POINT.CATEGORY}`
    );
    expect(result).toEqual({ data: null, error: mockError });
  });

});
