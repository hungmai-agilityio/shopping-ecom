import { render, screen } from '@testing-library/react';
import { SignUpSection } from '@/ui/sections';

jest.mock('next/navigation');

describe('Sign up form section', () => {
  test('Should render sign up form default', () => {
    render(<SignUpSection />);

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
