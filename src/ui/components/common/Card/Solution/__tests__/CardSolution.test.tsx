import { render, screen } from '@testing-library/react';

// Components
import { CardSolution } from '@/ui/components';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('CardSolution component', () => {
  const defaultProps = {
    title: 'Card Title',
    desc: 'Description card',
    src: '/icon_bag.svg',
    alt: 'icon bags'
  };

  test('renders CardSolution with default props', () => {
    render(<CardSolution {...defaultProps} />);
    const card = screen.getByText('Card Title');
    expect(card).toBeInTheDocument();
  });

  test('renders CardSolution with isBorder props', () => {
    render(<CardSolution {...defaultProps} isBorder />);

    const container =
      screen.getByText('Card Title').parentElement?.parentElement;
    const bgSpan = container?.querySelector('span');
    expect(bgSpan).toHaveClass('bg-black');
    expect(bgSpan).toHaveClass('group-hover:bg-white');
  });

  test('should be render match to snapshot', () => {
    const { container } = render(<CardSolution {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
