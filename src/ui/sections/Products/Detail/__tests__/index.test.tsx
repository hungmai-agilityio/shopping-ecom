import { fireEvent, render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mocks
import { mockProduct, mockUser } from '@/mock';

// Sections
import { ProductDetail } from '@/ui/sections';

describe('ProductDetail section', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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
  const defaultProps = {
    product: mockProduct,
    user: mockUser
  };
  test('Should render section with default props', () => {
    renderWithQueryClient(<ProductDetail {...defaultProps} />);

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(
      screen.getByText('Free 30 Days Delivery Returns. Details')
    ).toBeInTheDocument();
  });

  test('Call handle change quantity', () => {
    renderWithQueryClient(<ProductDetail {...defaultProps} />);

    const plusButton = screen.getByAltText('plus icon');
    fireEvent.click(plusButton);
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
  });

  test('Call handle change color picker', () => {
    renderWithQueryClient(<ProductDetail {...defaultProps} />);

    const colorChange = screen.getByLabelText('red-picker');
    fireEvent.click(colorChange);

    expect(colorChange).toHaveClass('ring-2 ring-dark');
  });

  test('Call handle change size picker', () => {
    renderWithQueryClient(<ProductDetail {...defaultProps} />);

    const sizeButton = screen.getByText('L');
    fireEvent.click(sizeButton);

    expect(sizeButton).toHaveClass('bg-primary text-white border-primary');
  });
});
