import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Navbar } from '@/ui/components';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  }
}));

describe('Navbar Component', () => {
  const mockOnClick = jest.fn();

  const mockItems = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: 'Product', url: '/product' }
  ];

  const defaultProps = {
    styles: 'gap-4',
    onClick: mockOnClick,
    items: mockItems
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('Should render component with default props', () => {
    mockUsePathname.mockImplementation(() => '/shop');
    render(<Navbar {...defaultProps} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Product')).toBeInTheDocument();
  });

  test('calls onClick when a link is clicked', () => {
    mockUsePathname.mockImplementation(() => '/');

    render(<Navbar {...defaultProps} />);

    fireEvent.click(screen.getByText('Shop'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Navbar {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
