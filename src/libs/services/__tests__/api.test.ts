import {
  deleteData,
  fetchData,
  fetchDataId,
  postAvatar,
  postData,
  updateData
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

  describe('postData', () => {
    it('should post data successfully', async () => {
      const mockData = { name: 'New Item' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
      });

      const response = await postData({ endpoint: '/items', data: mockData });

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_URL}/items`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mockData)
        }
      );
      expect(response).toEqual({ data: mockData, error: null });
    });

    it('should handle post error', async () => {
      const mockError = new Error('Post error');
      (fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const response = await postData({
        endpoint: '/items',
        data: { name: 'New Item' }
      });

      expect(response).toEqual({ data: null, error: mockError });
    });
  });

  describe('updateData', () => {
    it('should update data successfully with PATCH', async () => {
      const mockData = {
        id: 'it224s7155-f4j543gc-654fg0a11',
        name: 'Updated Item'
      };
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockData
      });

      const response = await updateData({
        endpoint: '/items',
        id: 'it224s7155-f4j543gc-654fg0a11',
        data: mockData,
        updateMethod: 'PATCH'
      });

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_URL}/items/it224s7155-f4j543gc-654fg0a11`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(mockData)
        }
      );
      expect(response).toEqual({ data: mockData, error: null });
    });

    it('should handle update error', async () => {
      const mockError = new Error('Update error');
      (fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const response = await updateData({
        endpoint: '/items',
        id: 'it224s7155-f4j543gc-654fg0a11',
        data: { name: 'Updated Item' }
      });

      expect(response).toEqual({ data: null, error: mockError });
    });
  });

  describe('deleteData', () => {
    it('should delete data by id successfully', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true })
      });

      const response = await deleteData({
        endpoint: '/items',
        id: 'it224s7155-f4j543gc-654fg0a11'
      });

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_URL}/items/it224s7155-f4j543gc-654fg0a11`,
        {
          method: 'DELETE'
        }
      );
      expect(response).toEqual({ success: true });
    });

    it('should throw an error if delete fails', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

      await expect(
        deleteData({
          endpoint: '/items',
          id: 'it224s7155-f4j543gc-654fg0a11'
        })
      ).rejects.toThrow('Failed to delete data');
    });
  });

  describe('postAvatar', () => {
    it('should upload an avatar and return URL', async () => {
      const mockFile = new File(['avatar'], 'avatar.png', {
        type: 'image/png'
      });
      const mockUrl = 'https://mockurl.com/avatar.png';

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: { url: mockUrl } })
      });

      const response = await postAvatar(mockFile);

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_AVATAR}?key=${process.env.NEXT_PUBLIC_API_KEY}`,
        {
          method: 'POST',
          body: expect.any(FormData)
        }
      );
      expect(response).toEqual(mockUrl);
    });

    it('should handle avatar upload error', async () => {
      const mockError = new Error('Upload error');
      (fetch as jest.Mock).mockRejectedValueOnce(mockError);

      const mockFile = new File(['avatar'], 'avatar.png', {
        type: 'image/png'
      });
      const response = await postAvatar(mockFile);

      expect(response).toEqual(mockError);
    });
  });
});
