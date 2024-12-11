import { render } from '@testing-library/react';

// Components
import { Panel } from '@/ui/components';

describe('Panel component', () => {
  const defaultProps = {
    selected: '1',
    tabIndex: '1',
    children: <p>Content</p>
  };

  test('Should be render match to snapshot', () => {
    const { container } = render(<Panel {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
