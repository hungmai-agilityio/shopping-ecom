import { render, screen } from '@testing-library/react';

import { Menu, MenuItem } from '@/ui/components';

describe('Menu component', () => {
  test('Should render component with default props', () => {
    render(
      <Menu>
        <MenuItem image="/user-white.svg" name="user profile" />
        <MenuItem image="/logout.svg" name="logout" />
      </Menu>
    );

    expect(screen.getByText('user profile')).toBeInTheDocument();
    expect(screen.getByText('logout')).toBeInTheDocument();
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(
      <Menu>
        <MenuItem image="/user-white.svg" name="user profile" />
        <MenuItem image="/logout.svg" name="logout" />
      </Menu>
    );

    expect(container).toMatchSnapshot();
  });
});
