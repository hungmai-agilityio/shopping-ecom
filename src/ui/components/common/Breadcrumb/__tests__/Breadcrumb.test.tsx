import { render, screen } from '@testing-library/react';

// Components
import { Breadcrumb } from '@/ui/components';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname() {
    return mockUsePathname();
  }
}));

describe('Breadcrumb component', () => {
  test('Should render component with default props', () => {
    mockUsePathname.mockImplementation(() => '/user');

    render(<Breadcrumb />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('user')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
  });

  test('Should renders with custom separator', () => {
    mockUsePathname.mockImplementation(() => '/shop/product');
    render(<Breadcrumb separator=">" />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('shop')).toBeInTheDocument();
    expect(screen.getByText('product')).toBeInTheDocument();
  });

  test('Should hides middle breadcrumb items if path length is greater than 3', () => {
    mockUsePathname.mockImplementation(() => '/shop/product/123');

    render(<Breadcrumb />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.queryByText('product')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
  });

  test('Should render when applies custom color class', () => {
    mockUsePathname.mockImplementation(() => '/user');

    render(<Breadcrumb color="text-red-500" />);

    const breadcrumb = screen.getByRole('navigation');
    expect(breadcrumb).toHaveClass('text-red-500');
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Breadcrumb />);

    expect(container).toMatchSnapshot();
  });
});
