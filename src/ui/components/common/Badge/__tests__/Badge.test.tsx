import { render, screen } from '@testing-library/react';

// Components
import { Badge, Icon } from '@/ui/components';

describe('Badge component', () => {
  const defautProps = {
    quantity: 10,
    children: <Icon src="/cart.svg" alt="cart" width={24} height={24} />
  };

  test('renders badge with default props', () => {
    render(<Badge {...defautProps} />);

    const icon = screen.getByAltText('cart');
    expect(icon).toBeInTheDocument();
    const badge = screen.getByText('10');
    expect(badge).toHaveClass('absolute -top-3 -right-3 h-6 w-6 rounded-full ');
  });

  test('renders badge with max quantity', () => {
    render(<Badge {...defautProps} quantity={1000} />);

    const icon = screen.getByAltText('cart');
    expect(icon).toBeInTheDocument();
    const badge = screen.getByText('99+');
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Badge {...defautProps} />);

    expect(container).toMatchSnapshot();
  });
});
