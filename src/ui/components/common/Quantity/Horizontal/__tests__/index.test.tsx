import { fireEvent, render, screen } from '@testing-library/react';

// Components
import { QuantityHorizontal } from '@/ui/components';

describe('QuantityHorizontal component', () => {
  const defaultProps = {
    value: 3,
    min: 1,
    max: 1000,
    onChange: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render default value', () => {
    render(<QuantityHorizontal {...defaultProps} />);
    expect(screen.getByDisplayValue('3')).toBeInTheDocument();
  });

  test('should handle decrease button click', () => {
    render(<QuantityHorizontal {...defaultProps} />);
    const minusButton = screen.getByAltText('minus icon');

    fireEvent.click(minusButton);

    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should handle increase button click', () => {
    render(<QuantityHorizontal {...defaultProps} />);
    const plusButton = screen.getByAltText('plus icon');

    fireEvent.click(plusButton);

    expect(screen.getByDisplayValue('4')).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should handle manual input change and set to min if NaN is entered', () => {
    render(<QuantityHorizontal {...defaultProps} />);
    const input = screen.getByDisplayValue('3');
    fireEvent.change(input, { target: { value: 'abc' } });

    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should handle manual input change and set to min if value is less than min', () => {
    render(<QuantityHorizontal {...defaultProps} />);
    const input = screen.getByDisplayValue('3');

    fireEvent.change(input, { target: { value: '0' } });

    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should handle manual input change and set to max if value exceeds max', () => {
    render(<QuantityHorizontal {...defaultProps} />);
    const input = screen.getByDisplayValue('3');

    fireEvent.change(input, { target: { value: '2000' } });

    expect(screen.getByDisplayValue('1000')).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should handle manual input change within range', () => {
    render(<QuantityHorizontal {...defaultProps} />);
    const input = screen.getByDisplayValue('3');

    fireEvent.change(input, { target: { value: '5' } });

    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should disable increase/decrease button when reaching min/max values', () => {
    const props = { ...defaultProps, value: 1 };
    render(<QuantityHorizontal {...props} />);

    const minusButton = screen.getByAltText('minus icon');
    const plusButton = screen.getByAltText('plus icon');

    expect(minusButton).toHaveClass('select-none');
    fireEvent.click(minusButton);
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();

    fireEvent.click(plusButton);

    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  test('should render match to snapshot', () => {
    const { container } = render(<QuantityHorizontal {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
