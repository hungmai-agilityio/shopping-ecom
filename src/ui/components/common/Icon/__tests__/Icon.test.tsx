import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Icon from '@/ui/components/common/Icon';

describe('Icon component', () => {
  const onClickMock = jest.fn();

  const defautProps = {
    src: '/cart.svg',
    alt: 'Cart Icon',
    width: 24,
    height: 24,
    onClick: onClickMock
  };

  test('renders icon with default props', () => {
    render(<Icon {...defautProps} />);

    const icon = screen.getByAltText('Cart Icon');
    expect(icon).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    render(<Icon {...defautProps} />);

    const icon = screen.getByAltText('Cart Icon');
    fireEvent.click(icon);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Icon {...defautProps} />);

    expect(container).toMatchSnapshot();
  });
});
