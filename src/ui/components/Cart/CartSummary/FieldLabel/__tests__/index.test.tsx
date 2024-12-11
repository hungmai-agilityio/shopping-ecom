import { render, screen } from '@testing-library/react';

// Components
import { FieldLabel } from '@/ui/components';

describe('CartTotalItem component', () => {
  const defaultProps = {
    children: '$1253',
    title: 'Subtotal'
  };

  test('Should render component with default props', () => {
    render(<FieldLabel {...defaultProps} />);

    const total = screen.getByText('Subtotal:');
    expect(total).toBeInTheDocument();
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(<FieldLabel {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
