import { render, screen } from '@testing-library/react';

// Components
import { Row } from '@/ui/components';

describe('Row component', () => {
  const defaultProps = {
    children: <p>Row</p>
  };
  test('Should render component default', () => {
    render(<Row {...defaultProps} />);

    const row = screen.getByText('Row');
    expect(row).toBeInTheDocument();
  });
});
