import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

// Hooks
import {
  useAddDataToCart,
  useAddToWishlist,
  useRemoveFromWishlist,
  useUpdateDataToCart
} from '@/hooks';

// Libs
import { getUserCart, getUserWishList } from '@/libs';

// Components
import { CardProductAction } from '@/ui/components';

// Mocks
import { mockProduct } from '@/mock';

jest.mock('@/hooks');
jest.mock('@/libs');
jest.mock('next/navigation');

describe('CardProductAction Component', () => {
  const mockWishlist = [
    { id: 'wishlist1', productId: 'product1', userId: 'user1' }
  ];

  const setupMocks = () => {
    (useAddDataToCart as jest.Mock).mockReturnValue({ mutate: jest.fn() });
    (useAddToWishlist as jest.Mock).mockReturnValue({ mutate: jest.fn() });
    (useRemoveFromWishlist as jest.Mock).mockReturnValue({ mutate: jest.fn() });
    (useUpdateDataToCart as jest.Mock).mockReturnValue({ mutate: jest.fn() });
    (getUserCart as jest.Mock).mockResolvedValue([]);
    (getUserWishList as jest.Mock).mockResolvedValue(mockWishlist);
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
  };

  const renderWithQueryClient = (ui: React.ReactElement) => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false
        }
      }
    });
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
    setupMocks();
  });

  test('Should renders product correctly', async () => {
    renderWithQueryClient(<CardProductAction {...mockProduct} />);

    expect(await screen.findByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    expect(screen.getByAltText('icon-click')).toBeInTheDocument();
  });

  test('Handles add to cart action', async () => {
    const mockMutate = jest.fn();
    (useAddDataToCart as jest.Mock).mockReturnValue({ mutate: mockMutate });
    renderWithQueryClient(<CardProductAction {...mockProduct} />);

    fireEvent.click(screen.getByText('Add To Cart'));

    await waitFor(() =>
      expect(mockMutate).toHaveBeenCalledWith(
        expect.objectContaining({
          productId: mockProduct.id,
          quantity: 1
        })
      )
    );
  });

  test('Should navigates to product preview on view click', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    renderWithQueryClient(<CardProductAction {...mockProduct} />);

    fireEvent.click(screen.getByAltText('Test Product'));

    expect(mockPush).toHaveBeenCalledWith(`/product/${mockProduct.id}`);
  });
});
