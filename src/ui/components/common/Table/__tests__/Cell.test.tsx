import { render, screen } from '@testing-library/react';

// Components
import { Cell } from '@/ui/components';

// Constants
import { CELL } from '@/constants';

describe('Cell component', () => {
  const defaultProps = {
    children: <p>Cell</p>,
    type: CELL.TD,
    label: 'Label'
  };
  test('Should render component default', () => {
    render(<Cell {...defaultProps} />);

    const cell = screen.getByText('Cell');
    const label = screen.getByText('Label');
    expect(cell).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('font-semibold mr-2');
  });
});
