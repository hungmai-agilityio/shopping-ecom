import { render, screen } from '@testing-library/react';

// Components
import { Head } from '@/ui/components';

describe('Head component', () => {
  const defaultProps = {
    children: <p>Head</p>
  };
  test('Should render component default', () => {
    render(<Head {...defaultProps} />);

    const head = screen.getByText('Head');
    expect(head).toBeInTheDocument();
  });
});
