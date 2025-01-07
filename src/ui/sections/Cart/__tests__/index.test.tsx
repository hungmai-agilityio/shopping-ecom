import { render, screen } from '@testing-library/react';
import { useUpdateQuantity, useRemoveFromCart, useCartData } from '@/hooks';
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
    (useCartData as jest.Mock).mockReturnValue({ data: mockCart });
  });

  test('Should displays error message when cart fetch fails', () => {
    (useCartData as jest.Mock).mockReturnValue({
      data: [],
      error: new Error('Failed to fetch')
    });

    render(<CartSection products={mockProducts} />);

    expect(
      screen.getByText(
        'Error: Failed to fetch cart data. Please try again later.'
      )
    ).toBeInTheDocument();
  });

  test('Should renders cart items and calculates subtotal correctly', () => {
    render(<CartSection products={mockProducts} />);

    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Attributes')).toBeInTheDocument();
    expect(screen.getByText('Process to checkout')).toBeInTheDocument();
  });
});
