import { render, screen } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';

// Components
import ProductList from '@/ui/components/ProductList';
import { mockUser } from '@/mock';

// Mock dependencies
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn()
  }))
}));

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn()
}));

jest.mock('@/hooks', () => ({
  useAddToWishlist: jest.fn(() => ({
    mutate: jest.fn()
  })),
  useRemoveFromWishlist: jest.fn(() => ({
    mutate: jest.fn()
  }))
}));

const mockProducts = [
  {
    id: '1',
    image: '/img1.webp',
    name: 'Product 1',
    price: 100,
    description: 'Sleek and portable laptop with powerful specs.',
    ratings: 5,
    category: 'computers',
    colors: ['Red', 'Yellow'],
    isNew: true,
    discount: 10,
    reviewCount: 200,
    stock: 300,
    isFlashSale: false,
    bestSelling: false
  },
  {
    id: '2',
    image: '/img2.webp',
    name: 'Product 2',
    price: 200,
    description: 'Sleek and portable laptop',
    ratings: 4,
    category: 'computers',
    colors: ['Blue', 'Gray'],
    isNew: false,
    discount: 5,
    reviewCount: 200,
    stock: 300,
    isFlashSale: false,
    bestSelling: false
  }
];

describe('ProductList Component', () => {
  test('shows loading state while fetching', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: null,
      isLoading: true,
      isError: false
    }));

    render(<ProductList products={[]} user={mockUser} isShowMore />);

    expect(screen.getByText('...Loading')).toBeInTheDocument();
  });

  test('renders error state if fetching fails', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: null,
      isLoading: false,
      isError: true
    }));

    render(<ProductList products={[]} user={mockUser} isShowMore />);

    expect(
      screen.getByText('Unable to load products! Try later')
    ).toBeInTheDocument();
  });
});
