import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { useCartData, useClearUserCart } from '@/hooks';

// Sections
import { CartOrder } from '@/ui/sections';

// Mocks
import { mockCart, mockProducts, mockUser } from '@/mock';

jest.mock('@tanstack/react-query');

jest.mock('@/hooks');

describe('CartOrder Component', () => {
  beforeEach(() => {
    (useCartData as jest.Mock).mockReturnValue({ data: mockCart });
  });

  test('Should renders loading state when cart data is loading', () => {
    (useCartData as jest.Mock).mockReturnValue({ data: [], isLoading: true });

    render(<CartOrder userId={mockUser.id} products={mockProducts} />);

    expect(screen.getByText('Loading your cart...')).toBeInTheDocument();
  });

  test('Should renders empty cart state when cart is empty', () => {
    (useCartData as jest.Mock).mockReturnValue({ data: [] });

    render(<CartOrder userId={mockUser.id} products={mockProducts} />);

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    expect(screen.getByAltText('cart empty')).toBeInTheDocument();
  });

  test('Calls clearUserCart when "Place Order" button is clicked', async () => {
    const mockMutate = jest.fn();
    (useClearUserCart as jest.Mock).mockReturnValue({
      mutate: mockMutate
    });

    render(<CartOrder userId={mockUser.id} products={mockProducts} />);

    const button = screen.getByText('Place Order');
    fireEvent.click(button);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledTimes(1);
    });
  });
});
