import { render } from '@testing-library/react';
import { Modal } from '@/ui/components';

describe('Modal component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    title: 'Title modal',
    children: 'children modal',
    onConfirm: jest.fn()
  };
  test('Should be render match to snapshot', () => {
    const { container } = render(<Modal {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  test('Should be render match to snapshot with confirm button', () => {
    const { container } = render(
      <Modal {...defaultProps} btnSecond="Confirm" />
    );

    expect(container).toMatchSnapshot();
  });
});
