import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { WishListSection } from '@/ui/sections';
import { useAddDataToCart, useClearWishlist } from '@/hooks';
import { mockProducts, mockWishlist } from '@/mock';

jest.mock('@tanstack/react-query');

jest.mock('@/hooks');

describe('WishListSection Component', () => {
  const mockAddToCartMutate = jest.fn();
  const mockClearWishlistMutate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useQuery as jest.Mock).mockReturnValue({
      data: mockWishlist,
      error: null
    });

    (useAddDataToCart as jest.Mock).mockReturnValue({
      mutate: mockAddToCartMutate
    });

    (useClearWishlist as jest.Mock).mockReturnValue({
      mutate: mockClearWishlistMutate
    });
  });

  test('renders wishlist products correctly', () => {
    render(<WishListSection products={mockProducts} />);

    expect(screen.getByText('Wishlist (2)')).toBeInTheDocument();
  });

  test('shows error message when wishlist fetch fails', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Failed to fetch wishlist')
    });

    render(<WishListSection products={mockProducts} />);

    expect(
      screen.getByText(
        'Error: Failed to fetch wishlist products. Please try again later.'
      )
    ).toBeInTheDocument();
  });

  test('handles adding all products to cart and clears wishlist', async () => {
    render(<WishListSection products={mockProducts} />);

    const moveAllButton = screen.getByText('Move All To Bag');
    fireEvent.click(moveAllButton);

    await waitFor(() => {
      expect(mockClearWishlistMutate).toHaveBeenCalledTimes(1);
    });
  });

  test('disables "Move All To Bag" button when wishlist is empty', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      error: null
    });

    render(<WishListSection products={mockProducts} />);

    const moveAllButton = screen.getByText('Move All To Bag');
    expect(moveAllButton).toBeDisabled();
  });
});
