import SizePicker from '@/ui/components/common/SizePicker';
import { render, screen } from '@testing-library/react';

describe('SizePicker component', () => {
  const defaultProps = {
    size: 'S',
    selected: '',
    onClick: jest.fn()
  };

  test('Should render component with default props', () => {
    render(<SizePicker {...defaultProps} />);

    const size = screen.getByText('S');

    expect(size).toBeInTheDocument();
    expect(size).toHaveClass(
      'min-w-8 min-h-8 px-1 max-w-btn-size truncate border border-dark rounded text-base'
    );
  });

  test('Should render component with selected item', () => {
    render(<SizePicker {...defaultProps} selected="S" />);

    const size = screen.getByText('S');

    expect(size).toBeInTheDocument();
    expect(size).toHaveClass('bg-primary text-white border-primary');
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(<SizePicker {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
