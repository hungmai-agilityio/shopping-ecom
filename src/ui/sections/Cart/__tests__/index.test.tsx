import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { useUpdateQuantity, useRemoveFromCart } from '@/hooks';
import { useRouter } from 'next/navigation';
import { CartSection } from '@/ui/sections';
import { mockCart, mockProducts } from '@/mock';

jest.mock('@tanstack/react-query');
jest.mock('@/hooks');
jest.mock('next/navigation');

describe('CartSection Component', () => {
  const mockUpdateQuantity = { mutate: jest.fn() };
  const mockRemoveProduct = { mutate: jest.fn() };
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    (useUpdateQuantity as jest.Mock).mockReturnValue(mockUpdateQuantity);
    (useRemoveFromCart as jest.Mock).mockReturnValue(mockRemoveProduct);
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });
  });

  test('Should displays error message when cart fetch fails', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Failed to fetch'),
      isLoading: false
    });

    render(<CartSection products={mockProducts} />);

    expect(
      screen.getByText(
        'Error: Failed to fetch cart data. Please try again later.'
      )
    ).toBeInTheDocument();
  });

  test('Should renders cart items and calculates subtotal correctly', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockCart,
      error: null
    });

    render(<CartSection products={mockProducts} />);

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Attributes')).toBeInTheDocument();
    expect(screen.getByText('Process to checkout')).toBeInTheDocument();
  });
});
