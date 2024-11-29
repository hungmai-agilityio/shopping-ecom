import { render, screen } from '@testing-library/react';

// Components
import { Body } from '@/ui/components';

describe('Body component', () => {
  const defaultProps = {
    children: <p>Body</p>
  };
  test('Should render component default', () => {
    render(<Body {...defaultProps} />);

    const body = screen.getByText('Body');
    expect(body).toBeInTheDocument();
  });
});
