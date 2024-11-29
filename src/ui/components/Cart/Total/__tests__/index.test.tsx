import { fireEvent, render, screen } from '@testing-library/react';

// Components
import { CartTotal } from '@/ui/components';

describe('CartTotal component', () => {
  const defaultProps = {
    subTotal: 125,
    onCheckout: jest.fn()
  };

  test('Should render component with default props', () => {
    render(<CartTotal {...defaultProps} />);

    expect(screen.getAllByText('$ 125')).toHaveLength(2);
  });

  test('Handle checkout when click button', () => {
    render(<CartTotal {...defaultProps} />);
    const btn = screen.getByText('Process to checkout');
    fireEvent.click(btn);

    expect(screen.getAllByText('$ 125')).toHaveLength(2);
    expect(defaultProps.onCheckout).toHaveBeenCalledTimes(1);
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(<CartTotal {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
