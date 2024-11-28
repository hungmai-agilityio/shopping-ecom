import { TYPE } from '@/constants';
import AuthForm from '@/ui/components/Auth';
import { Input } from '@/ui/components/common';
import { render, screen } from '@testing-library/react';

describe('AuthForm component', () => {
  const propsDefault = {
    title: 'Enter some text',
    subtitle: 'Enter some subtitle',
    children: (
      <div className="flex flex-col gap-5">
        <Input
          label="Text Input"
          placeholder="Enter some text"
          variant={TYPE.SECOND}
        />
      </div>
    )
  };

  test('Should render with default props', () => {
    render(<AuthForm {...propsDefault} />);

    expect(screen.getByText('Enter some text')).toBeInTheDocument();
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(<AuthForm {...propsDefault} />);

    expect(container).toMatchSnapshot();
  });
});
