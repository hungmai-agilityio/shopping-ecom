import { render, screen } from '@testing-library/react';
import { UserDropdown } from '@/ui/components';

jest.mock('next/navigation');

describe('UserDropdown component', () => {
  test('Should render user dropdown with icon', () => {
    render(<UserDropdown />);

    expect(screen.getByAltText('user dropdown')).toBeInTheDocument();
  });
});
