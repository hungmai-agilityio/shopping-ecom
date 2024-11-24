import { render, screen } from '@testing-library/react';

// Components
import { CardImage } from '@/ui/components';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('CardImage component', () => {
  const defaultProps = {
    src: '/arrival.png',
    alt: 'Jean Image',
    width: 590,
    height: 350,
    children: <p>Title jean</p>
  };

  test('renders CardImage with default props', () => {
    render(<CardImage {...defaultProps} />);
    const card = screen.getByAltText('Jean Image');
    expect(card).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<CardImage {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
