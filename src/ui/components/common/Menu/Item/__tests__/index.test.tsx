import { render, screen } from '@testing-library/react';

// Components
import { MenuItem } from '@/ui/components';

describe('Menu item component', () => {
  test('Should render component with default props', () => {
    render(<MenuItem image="/user-white.svg" name="user profile" />);

    expect(screen.getByText('user profile')).toBeInTheDocument();
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(
      <MenuItem image="/user-white.svg" name="user profile" />
    );

    expect(container).toMatchSnapshot();
  });
});
