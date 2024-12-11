import { render, screen } from '@testing-library/react';

// Components
import ToastMessage from '@/ui/components/common/ToastMessage';
import { STATUS } from '@/constants';

describe('ToastMessage component', () => {
  const defaultProps = {
    status: STATUS.SUCCESS,
    message: 'Messages success'
  };

  test('Should be render with default props', () => {
    render(<ToastMessage {...defaultProps} />);
    const message = screen.getByText('Messages success');
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass('bg-green-500');
  });

  test('Should be render with custom status props', () => {
    render(
      <ToastMessage
        {...defaultProps}
        status={STATUS.ERROR}
        message="Messages error"
      />
    );
    const message = screen.getByText('Messages error');
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass('bg-red-500');
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(<ToastMessage {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });
});
