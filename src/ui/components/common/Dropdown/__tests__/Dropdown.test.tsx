import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Components
import { Dropdown } from '@/ui/components';

jest.mock('@/hooks', () => ({
  useOutsideClick: jest.fn()
}));

describe('Dropdown Component', () => {
  const mockSetVisible = jest.fn();

  const renderDropdown = (isOpen = true) =>
    render(
      <Dropdown
        setVisible={mockSetVisible}
        isOpen={isOpen}
        menuButton={<p>Open</p>}
      >
        <div data-testid="dropdown-content">Dropdown Content</div>
      </Dropdown>
    );

  test('renders the component with label and icon', () => {
    renderDropdown();

    expect(screen.getByText('Open')).toBeInTheDocument();
  });

  test('shows children when isOpen is true', () => {
    renderDropdown(true);
    expect(screen.getByTestId('dropdown-content')).toBeInTheDocument();
  });

  test('does not show children when isOpen is false', () => {
    renderDropdown(false);
    expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument();
  });

  test('calls setVisible with true on label click when initially closed', () => {
    renderDropdown(false);
    fireEvent.click(screen.getByText('Open'));
    expect(mockSetVisible).toHaveBeenCalledWith(true);
  });

  test('calls setVisible with false on label click when initially open', () => {
    renderDropdown(true);
    fireEvent.click(screen.getByText('Open'));
    expect(mockSetVisible).toHaveBeenCalledWith(false);
  });
});
