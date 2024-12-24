import { render } from '@testing-library/react';
import { ModalAddress } from '@/ui/components';

describe('ModalAddress component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    onClick: jest.fn(),
    onSubmit: jest.fn(),
  };
  test('Should be render match to snapshot', () => {
    const { container } = render(<ModalAddress {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
