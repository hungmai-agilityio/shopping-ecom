import CountdownItem from '@/ui/components/common/Countdown/Item';
import { render, screen } from '@testing-library/react';

describe('CountdownItem component', () => {
  test('Should render CountdownItem', () => {
    render(<CountdownItem label="Hours" value="7" />);

    const label = screen.getByText('Hours');

    expect(label).toBeInTheDocument();
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<CountdownItem label="Hours" value="7" />);
    expect(container).toMatchSnapshot();
  });
});
