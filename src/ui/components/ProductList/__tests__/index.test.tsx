import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';

// Components
import { ProductList } from '@/ui/components';

jest.mock('next/navigation');
jest.mock('@tanstack/react-query');
jest.mock('@/libs/services/products');

const mockProducts = [
  {
    id: 1,
    image: '/img1.webp',
    name: 'Product 1',
    price: 100,
    ratings: 5,
    colors: ['Red', 'Yellow'],
    isNew: true,
    discount: 10
  },
  {
    id: 2,
    image: '/img2.webp',
    name: 'Product 2',
    price: 200,
    ratings: 4,
    colors: ['Blue', 'Gray'],
    isNew: false,
    discount: 5
  }
];

describe('ProductList', () => {
  test('renders product list correctly', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: { data: mockProducts },
      isLoading: false,
      isError: false
    });

    render(<ProductList products={[]} isShowMore />);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  test('shows loading state while fetching', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: { data: [] },
      isLoading: true,
      isError: false
    });

    render(<ProductList products={[]} isShowMore />);

    expect(screen.getByText('...Loading')).toBeInTheDocument();
  });

  test('disables the button when loading or error occurs', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: { data: mockProducts },
      isLoading: true,
      isError: false
    });

    render(<ProductList products={[]} isShowMore />);

    const button = screen.getByText('View All Products');
    expect(button).toBeDisabled();
  });

  test('renders error state if fetching fails', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: { data: [] },
      isLoading: false,
      isError: true
    });

    render(<ProductList products={[]} isShowMore />);

    expect(
      screen.getByText('Unable to load products! Try later')
    ).toBeInTheDocument();
  });
});
