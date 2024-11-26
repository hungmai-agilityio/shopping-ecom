import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { SendEmail } from '@/ui/components';

global.alert = jest.fn();

describe('SendEmail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should renders Input with placeholder', () => {
    render(<SendEmail />);
    const inputElement = screen.getByPlaceholderText('Enter your email');
    expect(inputElement).toBeInTheDocument();
  });

  test('updates value when typing in the input', () => {
    render(<SendEmail />);
    const inputElement = screen.getByPlaceholderText('Enter your email');

    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });

    expect(inputElement).toHaveValue('test@example.com');
  });

  test('clears value and calls alert when icon is clicked', () => {
    render(<SendEmail />);
    const inputElement = screen.getByPlaceholderText('Enter your email');
    const iconElement = screen.getByAltText('icon');

    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });
    expect(inputElement).toHaveValue('test@example.com');

    fireEvent.click(iconElement);

    expect(global.alert).toHaveBeenCalledWith('Update later');
    expect(inputElement).toHaveValue('');
  });

  test('applies custom classes correctly', () => {
    render(<SendEmail />);
    const inputElement = screen.getByPlaceholderText('Enter your email');
    expect(inputElement).toHaveClass('border-white bg-black text-white');
  });
});
