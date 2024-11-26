import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/navigation';

// Components
import { Logo } from '@/ui/components';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

describe('Logo component', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock
    });
  });

  test('Should renders with default props', () => {
    render(<Logo />);
    const logo = screen.getByText('Exclusive');

    expect(logo).toBeInTheDocument();
  });

  test('Should navigates to the correct URL when clicked', () => {
    render(<Logo />);

    const logoLink = screen.getByRole('link');
    fireEvent.click(logoLink);
    expect(logoLink).toBeInTheDocument();
  });

    test('Should render with custom color', () => {
      render(<Logo color='text-red-500'/>);

      const logoLink = screen.getByRole('link');
      fireEvent.click(logoLink);
      expect(logoLink).toBeInTheDocument();
      expect(logoLink).toHaveClass('text-red-500');
    });

  test('should be render match to snapshot', () => {
    const { container } = render(<Logo />);

    expect(container).toMatchSnapshot();
  });
});
