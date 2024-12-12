import { fireEvent, render, screen } from '@testing-library/react';

// Mock
import { categories } from '@/mock';

// Components
import { Categories } from '@/ui/components';

describe('Categories component', () => {
  const defaultProps = {
    categories: categories,
    selected: '',
    onSelect: jest.fn()
  };

  test('Should render with default props', () => {
    render(<Categories {...defaultProps} />);

    const title = screen.getByText('Phones');
    const image = screen.getByAltText('phone');

    expect(title).toBeInTheDocument();
    expect(image).toHaveClass('transition duration-300');
  });

  test('Function is called to select the category', () => {
    render(<Categories {...defaultProps} />);

    const image = screen.getByAltText('phone');

    fireEvent.click(image);
    expect(defaultProps.onSelect).toHaveBeenCalledTimes(1);
  });

  test('Should render match to snapshot', () => {
    const { container } = render(<Categories {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
