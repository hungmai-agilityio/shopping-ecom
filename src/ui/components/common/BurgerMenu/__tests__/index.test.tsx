import { fireEvent, render, screen } from '@testing-library/react';

// Constants
import { navItems } from '@/constants';

// Components
import { BurgerMenu } from '@/ui/components';

describe('Burger menu', () => {
  test('Should render Burger menu component', () => {
    render(<BurgerMenu items={navItems} />);

    expect(screen.getByAltText('menu')).toBeInTheDocument();
  });

  test('Toggles menu open and close', () => {
    render(<BurgerMenu items={navItems} />);

    fireEvent.click(screen.getByAltText('menu'));

    navItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByAltText('close'));

    expect(screen.getByAltText('menu')).toBeInTheDocument();
  });
});
