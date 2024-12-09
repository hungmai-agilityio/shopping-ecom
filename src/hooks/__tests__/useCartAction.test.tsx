import { act, renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Hooks
import {
  useAddDataToCart,
  useRemoveFromCart,
  useUpdateDataToCart,
  useUpdateQuantity
} from '@/hooks';

// Constants
import { QUERY } from '@/constants';

// Mocks
import { mockCart } from '@/mock';

(global.fetch as jest.Mock) = jest.fn();

describe('useCartActions Hook', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  test('Should call add data when useAddDataToCart is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useAddDataToCart(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate(mockCart[0]);
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(QUERY.CART),
      expect.objectContaining({ method: 'POST' })
    );
  });

  test('should call deleteCart when removeFromCart is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useRemoveFromCart(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate('5370g6022-55k087152-6438fh211');
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5370g6022-55k087152-6438fh211'),
      expect.objectContaining({ method: 'DELETE' })
    );
    expect(queryClient.getQueryData([QUERY.CART])).toBeUndefined();
  });

  test('should call updateCart with correct data when updateDataToCart is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useUpdateDataToCart(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate({
        id: '5370g6022-55k087152-6438fh211',
        data: { color: 'White', quantity: 3 }
      });
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5370g6022-55k087152-6438fh211'),
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ color: 'White', quantity: 3 })
      })
    );
    expect(queryClient.getQueryData([QUERY.CART])).toBeUndefined();
  });

  test('should call updateCart with correct data when updateQuantity is triggered', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({})
    });

    const { result } = renderHook(() => useUpdateQuantity(), {
      wrapper
    });

    await act(async () => {
      await result.current.mutate({
        id: '5370g6022-55k087152-6438fh211',
        newQuantity: 2
      });
    });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('5370g6022-55k087152-6438fh211'),
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ quantity: 2 })
      })
    );
    expect(queryClient.getQueryData([QUERY.CART])).toBeUndefined();
  });
});
