import { fireEvent, render, screen } from '@testing-library/react';

// Components
import { Quantity } from '@/ui/components';

describe('Quantity component', () => {
  const defaultProps = {
    value: 3,
    onChange: jest.fn()
  };
  beforeEach(() => {
    jest.fn().mockClear();
  });

  test('render default props', () => {
    render(<Quantity {...defaultProps} />);
    expect(screen.getByText(3)).toBeInTheDocument();
  });

  test('handled when clicking on "bottom arrow"', () => {
    render(<Quantity {...defaultProps} />);
    const minus = screen.getByAltText('arrow-bot icon');
    fireEvent.click(minus);
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('handled when clicking on "top arrow"', () => {
    render(<Quantity {...defaultProps} />);
    const plus = screen.getByAltText('arrow-top icon');
    fireEvent.click(plus);
    expect(screen.getByText(4)).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Quantity {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
