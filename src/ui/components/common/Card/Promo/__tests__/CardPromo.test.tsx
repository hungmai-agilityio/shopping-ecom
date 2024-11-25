import { render, screen } from '@testing-library/react';

// Components
import { CardPromo } from '@/ui/components';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('CardPromo component', () => {
  const defaultProps = {
    src: '/arrival.png',
    alt: 'Jean Image',
    width: 590,
    height: 350,
    children: <p>Title jean</p>
  };

  test('renders CardPromo with default props', () => {
    render(<CardPromo {...defaultProps} />);
    const card = screen.getByAltText('Jean Image');
    expect(card).toBeInTheDocument();
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<CardPromo {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
