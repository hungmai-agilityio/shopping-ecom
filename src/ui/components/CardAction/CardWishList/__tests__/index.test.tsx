import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// HooksHooks
import {
  useAddDataToCart,
  useRemoveFromWishlist,
  useUpdateDataToCart
} from '@/hooks';

// LibsLibs
import { getUserCart } from '@/libs';

// Components
import { CardWishList } from '@/ui/components';

// Mocks
import { mockProduct, mockUser } from '@/mock';

jest.mock('@/hooks');
jest.mock('@/libs');

describe('CardWishList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders product information correctly', () => {
    render(<CardWishList {...mockProduct} />);

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByAltText('icon-click')).toBeInTheDocument();
  });

  test('Add product to the cart when not already in cart', async () => {
    const mockAddToCart = jest.fn();
    (useAddDataToCart as jest.Mock).mockReturnValue({ mutate: mockAddToCart });

    // Get empty user cart
    (getUserCart as jest.Mock).mockResolvedValue([]);

    render(<CardWishList {...mockProduct} />);

    fireEvent.click(screen.getByText('Add To Cart'));

    await waitFor(() =>
      expect(mockAddToCart).toHaveBeenCalledWith(
        expect.objectContaining({
          productId: mockProduct.id,
          quantity: 1
        })
      )
    );
  });

  test('updates quantity if product already exists in cart', async () => {
    const mockUpdateCart = jest.fn();
    (useUpdateDataToCart as jest.Mock).mockReturnValue({
      mutate: mockUpdateCart
    });
    (getUserCart as jest.Mock).mockResolvedValue([
      {
        id: 'cart1',
        productId: mockProduct.id,
        userId: mockUser.id,
        quantity: 2
      }
    ]);

    render(<CardWishList {...mockProduct} />);

    fireEvent.click(screen.getByText('Add To Cart'));

    await waitFor(() =>
      expect(mockUpdateCart).toHaveBeenCalledWith({
        id: 'cart1',
        data: { quantity: 3 }
      })
    );
  });

  test('removes product from wishlist', async () => {
    const mockRemoveFromWishlist = jest.fn();
    (useRemoveFromWishlist as jest.Mock).mockReturnValue({
      mutate: mockRemoveFromWishlist
    });

    render(<CardWishList {...mockProduct} />);

    fireEvent.click(screen.getByAltText('icon-click'));

    await waitFor(() =>
      expect(mockRemoveFromWishlist).toHaveBeenCalledWith(mockProduct.id)
    );
  });
});
