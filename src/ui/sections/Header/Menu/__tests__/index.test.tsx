import { render, screen } from '@testing-library/react';
import { create } from 'zustand';
import { UserMenu } from '@/ui/sections';
import { useUserStore } from '@/stores';

jest.mock('@/stores');

jest.mock('@/ui/components', () => ({
  UserAction: jest.fn(() => <div data-testid="user-action" />),
  UserIcon: jest.fn(() => <div data-testid="user-icon" />)
}));

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} aria-label="sign-in">
      {children}
    </a>
  );
});

describe('UserMenu', () => {
  const createMockStore = (initialState: { userId: string | null }) =>
    create(() => initialState);

  it('renders UserIcon and link to sign-in when userId is null', () => {
    const mockStore = createMockStore({ userId: null });
    (useUserStore as unknown as jest.Mock).mockImplementation(mockStore);

    render(<UserMenu />);

    expect(screen.getByTestId('user-icon')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign-in/i })).toHaveAttribute(
      'href',
      '/sign-in'
    );
  });

  it('renders UserAction when userId is present', () => {
    const mockUserId = 'testUserId';
    const mockStore = createMockStore({ userId: mockUserId });
    (useUserStore as unknown as jest.Mock).mockImplementation(mockStore);

    render(<UserMenu />);

    expect(screen.getByTestId('user-action')).toBeInTheDocument();
  });
});
