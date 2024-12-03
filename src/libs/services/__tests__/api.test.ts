import {
  fetchData,
  fetchDataId,
} from '@/libs';

(global.fetch as jest.Mock) = jest.fn();

describe('API Utility Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchData', () => {
    test('should fetch data successfully', async () => {
      const mockData = { name: 'Test Data' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
      });

      const response = await fetchData({ endpoint: '/test-endpoint' });

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_URL}/test-endpoint`
      );
      expect(response).toEqual({ data: mockData, error: null });
    });

    test('should handle fetch error', async () => {
      const mockError = new Error('Fetch error');
      (fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const response = await fetchData({ endpoint: '/test-endpoint' });

      expect(response).toEqual({ data: null, error: mockError });
    });
  });

  describe('fetchDataId', () => {
    test('should fetch data by id successfully', async () => {
      const mockData = {
        id: 'it224s7155-f4j543gc-654fg0a11',
        name: 'Item'
      };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
      });

      const response = await fetchDataId({
        endpoint: '/items/',
        id: 'it224s7155-f4j543gc-654fg0a11'
      });

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_URL}/items/it224s7155-f4j543gc-654fg0a11`
      );
      expect(response).toEqual(mockData);
    });

    test('should throw an error if fetch fails', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

      await expect(
        fetchDataId({
          endpoint: '/items/',
          id: 'it224s7155-f4j543gc-654fg0a11'
        })
      ).rejects.toThrow('Failed to fetch data');
    });
  });
})