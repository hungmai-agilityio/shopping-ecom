import { render } from '@testing-library/react';

// Components
import { Tabs } from '@/ui/components';

describe('Tabs component', () => {
  const defaultProps = {
    list: [
      {
        title: 'Tab 1',
        value: '1'
      },
      {
        title: 'Tab 2',
        value: '2'
      }
    ],
    selected: '1',
    onClick: jest.fn()
  };

  test('Should be render match to snapshot', () => {
    const { container } = render(<Tabs {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
