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
import { mockUser } from '@/mock';

jest.mock('@/hooks');
jest.mock('@/libs');
jest.mock('next/navigation');
describe('CardWishList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    colors: ['Red', 'Blue', 'Green'],
    sizes: ['S', 'M', 'L'],
    discount: 10,
    id: '3b0c8e6a-95d3-4f4d-8d47-bb4d6b7e4b2e',
    productId: 'd92b5c47-2f8a-4b7c-9ff9-58c1d3cf92da',
    image: 'https://example.com/product-image.jpg',
    isDiscount: true,
    isNew: true,
    isNewProduct: true,
    name: 'Sample Product Name',
    originalPrice: 100,
    price: 90,
    ratings: 4.5,
    userId: mockUser.id
  };

  test('renders product information correctly', () => {
    render(<CardWishList {...defaultProps} />);

    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(`$${defaultProps.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByAltText('icon-click')).toBeInTheDocument();
  });

  test('Add product to the cart when not already in cart', async () => {
    const mockAddToCart = jest.fn();
    (useAddDataToCart as jest.Mock).mockReturnValue({ mutate: mockAddToCart });

    (getUserCart as jest.Mock).mockResolvedValue([]);

    render(<CardWishList {...defaultProps} />);

    fireEvent.click(screen.getByText('Add To Cart'));

    await waitFor(() =>
      expect(mockAddToCart).toHaveBeenCalledWith(
        expect.objectContaining({
          productId: defaultProps.productId,
          quantity: 1,
          color: 'Red',
          size: 'S',
          userId: expect.any(String)
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
        productId: defaultProps.productId,
        userId: mockUser.id,
        quantity: 2
      }
    ]);

    render(<CardWishList {...defaultProps} />);

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

    render(<CardWishList {...defaultProps} />);

    fireEvent.click(screen.getByAltText('icon-click'));

    await waitFor(() =>
      expect(mockRemoveFromWishlist).toHaveBeenCalledWith(defaultProps.id)
    );
  });
});
