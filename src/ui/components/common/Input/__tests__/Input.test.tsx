import { fireEvent, render, screen } from '@testing-library/react';

// Constants
import { TYPE } from '@/constants';

// Components
import { Input } from '@/ui/components';

// Test Data
const propsDefault = {
  label: 'Text Input',
  placeholder: 'Enter some text',
  value: 'test value',
  onChange: jest.fn(),
  message: 'This is an error message',
  onClick: jest.fn()
};

describe('Input', () => {
  test('renders PRIMARY type input', () => {
    render(<Input {...propsDefault} variant={TYPE.PRIMARY} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(
      'border border-dark rounded-md focus:ring-1 focus:ring-dark h-14'
    );
  });

  test('renders SECOND type input', () => {
    render(<Input {...propsDefault} variant={TYPE.SECOND} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(
      'border-b border-gray-300 focus:border-dark h-12'
    );
  });

  test('renders THIRD type input', () => {
    render(<Input {...propsDefault} variant={TYPE.THIRD} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(
      'bg-gray-100 rounded-md focus:ring-1 focus:ring-dark h-12'
    );
  });

  test('shows message when provided', () => {
    render(<Input {...propsDefault} message="This is an error message" />);

    const messageElement = screen.getByText('This is an error message');
    expect(messageElement).toBeInTheDocument();
  });

  test('triggers onClick when icon is clicked', () => {
    render(<Input {...propsDefault} icon="/heart.svg" />);

    const iconElement = screen.getByAltText('icon');
    fireEvent.click(iconElement);

    expect(propsDefault.onClick).toHaveBeenCalledTimes(1);
  });

  test('should render match to snapshot', () => {
    const { container } = render(
      <Input {...propsDefault} variant={TYPE.PRIMARY} />
    );
    expect(container).toMatchSnapshot();
  });
});
