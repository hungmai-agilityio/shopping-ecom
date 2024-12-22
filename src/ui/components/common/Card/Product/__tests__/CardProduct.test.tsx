describe('CardProduct component', () => {});

import CardProduct from '@/ui/components/common/Card/Product';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CardProduct', () => {
  const defaultProps = {
    src: 'https://i.ibb.co/Jx5zGXk/head-1.webp',
    alt: 'Example Product Image',
    id: 'product-1',
    name: 'Example Product',
    colors: ['Red', 'Blue'],
    rating: 4,
    price: 120,
    oldPrice: 150,
    icon: '/heart.svg',
    selectedColor: 'Red',
    onAdd: jest.fn(),
    onIconClick: jest.fn(),
    onView: jest.fn(),
    isShowAction: true
  };

  test('Should render with default props', () => {
    render(<CardProduct {...defaultProps} />);

    expect(screen.getByText('Example Product')).toBeInTheDocument();
    expect(screen.getByText('$120')).toBeInTheDocument();
    expect(screen.getByText('$150')).toBeInTheDocument();
    expect(screen.getByText('(4)')).toBeInTheDocument();
  });

  test('Should displays discount label when discount props', () => {
    render(<CardProduct {...defaultProps} discount={20} />);

    expect(screen.getByText('-20%')).toBeInTheDocument();
  });

  test('displays NEW label when isNewProduct is true', () => {
    render(<CardProduct {...defaultProps} isNewProduct />);

    expect(screen.getByText('NEW')).toBeInTheDocument();
  });

  test('Test function onAdd when Add To Cart button is clicked', () => {
    render(<CardProduct {...defaultProps} />);
    fireEvent.mouseEnter(screen.getByAltText('Example Product Image'));
    const addToCartButton = screen.getByText('Add To Cart');
    expect(addToCartButton).toBeInTheDocument();
    fireEvent.click(addToCartButton);

    expect(defaultProps.onAdd).toHaveBeenCalledTimes(1);
  });

  test('Test function onIconClick when icon is clicked', () => {
    render(<CardProduct {...defaultProps} />);

    fireEvent.click(screen.getByAltText('icon-click'));

    expect(defaultProps.onIconClick).toHaveBeenCalledTimes(1);
  });

  test('Test function onView function when View icon is clicked', () => {
    render(<CardProduct {...defaultProps} />);

    const viewIcon = screen.getByAltText('Example Product Image');
    fireEvent.click(viewIcon);

    expect(defaultProps.onView).toHaveBeenCalledTimes(1);
  });

  test('Should renders color picker with available colors', () => {
    render(<CardProduct {...defaultProps} />);

    expect(screen.getByLabelText('Red-picker')).toBeInTheDocument();
    expect(screen.getByLabelText('Blue-picker')).toBeInTheDocument();
  });

  test('Should render match to snapshot', () => {
    const { container } = render(<CardProduct {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
