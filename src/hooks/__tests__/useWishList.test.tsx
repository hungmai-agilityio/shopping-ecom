import { act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Hooks
import { useAddToWishlist, useRemoveFromWishlist } from '@/hooks';

// Constants
import { QUERY } from '@/constants';

(global.fetch as jest.Mock) = jest.fn();

describe('useAddToWishlist Hook', () => {
  const queryClient = new QueryClient();

  const wishListItem = {
    id: '5391fk5-694225942-566783j',
    userId: '1949kf-5894871d-6563l0s61a',
    productId: '59212e592-4f60i18-f2kc3411',
    color: 'White'
  };

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('Should call addWishList when addToWishlist is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useAddToWishlist(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate(wishListItem);
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(QUERY.WISHLIST),
      expect.objectContaining({ method: 'POST' })
    );
  });
});

describe('useRemoveFromWishlist Hook', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('should call deleteWishList when removeFromWishlist is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useRemoveFromWishlist(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate('5370g6022-55k087152-6438fh211');
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5370g6022-55k087152-6438fh211'),
      expect.objectContaining({ method: 'DELETE' })
    );
    expect(queryClient.getQueryData([QUERY.WISHLIST])).toBeUndefined();
  });
});
