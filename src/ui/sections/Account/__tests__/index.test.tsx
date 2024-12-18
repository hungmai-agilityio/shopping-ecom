import { render, screen, fireEvent } from '@testing-library/react';

// Mocks
import { mockUser } from '@/mock';

// Sections
import { AccountSection } from '@/ui/sections';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));

describe('AccountSection Component', () => {
  test('Should renders title and ProfileSection by default', () => {
    render(<AccountSection user={mockUser} />);

    expect(screen.getByText('Manage My Account')).toBeInTheDocument();
    expect(screen.getByText('Edit Your Profile'));
  });

  test('Switches to Address Book tab and renders AddressSection', () => {
    render(<AccountSection user={mockUser} />);

    const addressTab = screen.getByText('Address Book');
    fireEvent.click(addressTab);

    expect(screen.getByText('My Address'));
  });
});