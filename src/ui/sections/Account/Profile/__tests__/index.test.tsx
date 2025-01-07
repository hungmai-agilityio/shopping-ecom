import { render, screen } from '@testing-library/react';

// Mocks
import { mockUserAddress } from '@/mock';

// Sections
import { ProfileSection } from '@/ui/sections';

jest.mock('@/libs');
jest.mock('next/navigation');

describe('Profile section', () => {
  test('Should render default profile form', () => {
    render(<ProfileSection user={mockUserAddress} />);

    expect(screen.getByText('Edit Your Profile')).toBeInTheDocument();
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});
