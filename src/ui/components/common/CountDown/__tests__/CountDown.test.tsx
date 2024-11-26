import { Countdown } from '@/ui/components/common';
import { render, screen } from '@testing-library/react';

describe('Countdown component', () => {
  test('Should render Countdown component', () => {
    render(<Countdown days={1} hours={2} minutes={12} seconds={11} />);

    const days = screen.getByText('01');
    const hours = screen.getByText('02');
    const minutes = screen.getByText('12');
    const seconds = screen.getByText('11');

    expect(days).toBeInTheDocument();
    expect(hours).toBeInTheDocument();
    expect(minutes).toBeInTheDocument();
    expect(seconds).toBeInTheDocument();
  });

  test('should be render match to snapshot', () => {
    const { container } = render(
      <Countdown days={1} hours={2} minutes={12} seconds={11} />
    );

    expect(container).toMatchSnapshot();
  });
});
