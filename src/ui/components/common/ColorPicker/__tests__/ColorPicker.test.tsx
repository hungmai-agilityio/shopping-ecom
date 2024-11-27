import { fireEvent, render, screen } from '@testing-library/react';

// Mock
import { colors } from '@/mock';

// Components
import { ColorPicker } from '@/ui/components';

describe('Color picker component', () => {
  const mockOnClick = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should render with default props', () => {
    render(<ColorPicker colors={colors} />);
    expect(screen.getByLabelText('White-picker')).toBeInTheDocument();
  });

  test('Should call handleChange with correct color when a color is clicked', () => {
    render(
      <ColorPicker
        colors={colors}
        onClick={mockOnClick}
        selectedColor="Green"
      />
    );

    const colorChange = screen.getByLabelText('Green-picker');
    fireEvent.click(colorChange);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveBeenCalledWith('Green');
  });

  test('should render match to snapshot', () => {
    const { container } = render(<ColorPicker colors={colors} />);
    expect(container).toMatchSnapshot();
  });
});
