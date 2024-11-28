import { act, fireEvent, render, screen } from '@testing-library/react';

// Constants
import { slideHero } from '@/constants';

// Components
import { Carousel } from '@/ui/components';
jest.useFakeTimers();

describe('Carousel component', () => {
  const defaultProps = {
    items: slideHero,
    autoPlay: true,
    showNavigation: true,
    duration: 5000
  };

  test('Should render Carousel with default props', () => {
    render(<Carousel {...defaultProps} />);

    const slide = screen.getByText('IPhone 14 Series');

    expect(slide).toBeInTheDocument();
  });

  test('changes slide on button click', () => {
    render(<Carousel {...defaultProps} />);

    const slide = screen.getByText('IPhone 14 Series');
    const slideTwo = screen.getByText('Canon camera');

    expect(slide).toBeInTheDocument();

    const buttons = screen.getAllByRole('button', { name: 'carousel-btn' });
    fireEvent.click(buttons[1]);

    expect(slideTwo).toBeInTheDocument();
  });

  test('auto changes slide after duration', () => {
    render(<Carousel {...defaultProps} />);

    const slide = screen.getByText('IPhone 14 Series');
    const slideTwo = screen.getByText('Canon camera');

    expect(slide).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(slideTwo).toBeInTheDocument();
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(<Carousel {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
