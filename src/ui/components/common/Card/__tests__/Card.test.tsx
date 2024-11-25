import { render, screen } from '@testing-library/react';

// Components
import { Card } from '@/ui/components';

describe('Card component', () => {
  const defaultProps = {
    children: <p>Content</p>
  };
  test('Should render card with default props', () => {
    render(<Card {...defaultProps} />);

    const content = screen.getByText('Content');

    expect(content).toBeInTheDocument();
  });

  test('Should render card with title props', () => {
    render(<Card {...defaultProps} title="Header" />);

    const content = screen.getByText('Content');
    const title = screen.getByText('Header');

    expect(content).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('border-t-2 border-r-2 border-2 p-4 font-medium');
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Card {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
