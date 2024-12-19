import { render, screen } from '@testing-library/react';
import { SignInSection } from '@/ui/sections';

jest.mock('next/navigation');

describe('Sign in form section', () => {
  test('Should render sign in form default', () => {
    render(<SignInSection />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});
