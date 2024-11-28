import { SIZE } from '@/constants';
import { Avatar } from '@/ui/components';
import { render, screen } from '@testing-library/react';

describe('Avatar component', () => {
  const defaultProps = {
    src: '/user.svg',
    alt: 'test user',
    circle: false,
    onClick: jest.fn()
  };

  test('Should render component with default props', () => {
    render(<Avatar {...defaultProps} sizes={SIZE.SMALL} />);

    const avatar = screen.getByAltText('test user');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('object-cover font-bold');
  });

  test('Should render component with circle', () => {
    render(<Avatar {...defaultProps} sizes={SIZE.SMALL} circle />);

    const avatar = screen.getByAltText('test user');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveClass('rounded-full');
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(
      <Avatar {...defaultProps} sizes={SIZE.SMALL} />
    );

    expect(container).toMatchSnapshot();
  });
});
