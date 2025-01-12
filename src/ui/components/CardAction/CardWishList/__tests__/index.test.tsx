import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CardWishList } from '@/ui/components';
import { mockProduct, mockUser } from '@/mock';

jest.mock('next/navigation');

describe('CardWishList Component', () => {
  let queryClient: QueryClient;

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient = new QueryClient();
  });

  const defaultProps = {
    product: mockProduct,
    userId: mockUser.id
  };

  test('renders product information correctly', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CardWishList {...defaultProps} />
      </QueryClientProvider>
    );

    expect(screen.getByText(defaultProps.product.name)).toBeInTheDocument();
    expect(
      screen.getByText(`$${defaultProps.product.price}`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.product.name)).toBeInTheDocument();
    expect(screen.getByAltText('icon-click')).toBeInTheDocument();
  });
});
