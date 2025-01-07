import { render } from '@testing-library/react';
import { ModalPassword } from '@/ui/components';
import { mockUser } from '@/mock';

jest.mock('next/navigation');

describe('ModalPassword component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    user: mockUser
  };
  test('Should be render match to snapshot', () => {
    const { container } = render(<ModalPassword {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
