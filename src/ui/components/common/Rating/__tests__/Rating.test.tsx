import Rating from '@/ui/components/common/Rating';
import { render, screen } from '@testing-library/react';

describe('Rating component', () => {
  test('Should render component with full rating', () => {
    render(<Rating icon="/star.svg" count={5} />);

    const star = screen.getByAltText('rating 5');
    expect(star).toBeInTheDocument();
  });

  test('Do not render the component with an out of bounds rating', () => {
    render(<Rating icon="/star.svg" count={10} />);

    const star = screen.getByAltText('rating 5');
    expect(star).toBeInTheDocument();
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<Rating icon="/star.svg" count={5} />);

    expect(container).toMatchSnapshot();
  });
});
