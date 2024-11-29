import { render, screen } from '@testing-library/react';

// Components
import { Table } from '@/ui/components';

describe('Table component', () => {
  const defaultProps = {
    children: <p>Table</p>
  };
  test('Should render component default', () => {
    render(<Table {...defaultProps} />);

    const table = screen.getByText('Table');
    expect(table).toBeInTheDocument();
  });
});
