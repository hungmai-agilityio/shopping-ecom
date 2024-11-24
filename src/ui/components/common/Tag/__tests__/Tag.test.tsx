import { render, screen } from '@testing-library/react';

// Components
import { Tag } from '@/ui/components';

describe('Tag component', () => {
  test('Should render component with default props', () => {
    render(<Tag label="Categories" />);

    const labelElement = screen.getByText('Categories');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass('text-primary');
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Tag label="Categories" />);

    expect(container).toMatchSnapshot();
  });
});
