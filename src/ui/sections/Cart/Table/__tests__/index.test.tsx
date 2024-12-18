import { render, screen, fireEvent } from '@testing-library/react';
import { CartTable } from '@/ui/sections';
import { mockProducts } from '@/mock';

const mockCart = [
  {
    id: 'item1',
    productId: 'product1',
    quantity: 2,
    color: 'red',
    size: 'M',
    userId: 'user1'
  },
  {
    id: 'item2',
    productId: 'product2',
    quantity: 1,
    color: 'blue',
    size: 'L',
    userId: 'user1'
  }
];

describe('CartTable Component', () => {
  test('Should renders empty cart when no items are present', () => {
    render(
      <CartTable
        products={mockProducts}
        cart={[]}
        onChangeQuantity={jest.fn()}
        onRemoveProduct={jest.fn()}
      />
    );

    expect(screen.getByAltText('cart empty')).toBeInTheDocument();
  });

  test('renders cart table with products', () => {
    render(
      <CartTable
        products={mockProducts}
        cart={mockCart}
        onChangeQuantity={jest.fn()}
        onRemoveProduct={jest.fn()}
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Product2')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
  });

  test('Calls onChangeQuantity when quantity is changed', () => {
    const mockOnChangeQuantity = jest.fn();

    render(
      <CartTable
        products={mockProducts}
        cart={mockCart}
        onChangeQuantity={mockOnChangeQuantity}
        onRemoveProduct={jest.fn()}
      />
    );

    const quantity = screen.getAllByAltText('arrow-top icon')[0];
    fireEvent.click(quantity);

    expect(mockOnChangeQuantity).toHaveBeenCalledWith('item1', 3);
  });

  test('Calls onRemoveProduct when delete icon is clicked', () => {
    const mockOnRemoveProduct = jest.fn();

    render(
      <CartTable
        products={mockProducts}
        cart={mockCart}
        onChangeQuantity={jest.fn()}
        onRemoveProduct={mockOnRemoveProduct}
      />
    );

    const deleteButtons = screen.getAllByAltText('icon-delete');
    fireEvent.click(deleteButtons[0]);

    expect(mockOnRemoveProduct).toHaveBeenCalledWith('item1');
  });
});
