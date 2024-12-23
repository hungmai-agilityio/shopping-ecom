import { render, screen, fireEvent } from '@testing-library/react';
import { ScrollTop } from '@/ui/components';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

describe('ScrollTop Component', () => {
  test('Should not display the button initially', () => {
    render(<ScrollTop />);
    const button = screen.queryByAltText('Go to top');
    expect(button).not.toBeInTheDocument();
  });

  test('Should display the button when scrolled down', () => {
    render(<ScrollTop />);

    fireEvent.scroll(window, { target: { scrollY: 400 } });

    const button = screen.queryByAltText('Go to top');
    expect(button).toBeInTheDocument();
  });

  test('Should hide the button when scrolled back up', () => {
    render(<ScrollTop />);

    fireEvent.scroll(window, { target: { scrollY: 400 } });
    let button = screen.queryByAltText('Go to top');
    expect(button).toBeInTheDocument();

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    button = screen.queryByAltText('Go to top');
    expect(button).not.toBeInTheDocument();
  });

  test('Should scroll to top when button is clicked', () => {
    render(<ScrollTop />);

    fireEvent.scroll(window, { target: { scrollY: 400 } });
    const button = screen.getByAltText('Go to top');

    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });
});
