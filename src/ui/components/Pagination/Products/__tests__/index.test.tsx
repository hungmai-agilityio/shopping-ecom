import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';

// Components
import { PaginationProduct } from '@/ui/components';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn()
}));

describe('PaginationProduct Component', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush
    });

    (useSearchParams as jest.Mock).mockReturnValue({
      toString: () => ''
    });
  });

  test('Renders left and right arrow icons', () => {
    render(<PaginationProduct queryPage="page" start={0} />);

    expect(screen.getByAltText('arrow-left icon')).toBeInTheDocument();
    expect(screen.getByAltText('arrow-right icon')).toBeInTheDocument();
  });

  test('Calls handleNext when the next button is clicked', () => {
    render(<PaginationProduct queryPage="page" start={0} />);

    const nextButton = screen.getByAltText('arrow-right icon');
    fireEvent.click(nextButton);

    expect(mockPush).toHaveBeenCalledWith('?page=4', { scroll: false });
  });

  test('Calls handlePrev when the previous button is clicked', () => {
    render(<PaginationProduct queryPage="page" start={4} />);

    const prevButton = screen.getByAltText('arrow-left icon');
    fireEvent.click(prevButton);

    expect(mockPush).toHaveBeenCalledWith('?page=0', { scroll: false });
  });

  test('Does not go below 0 when the previous button is clicked at the start', () => {
    render(<PaginationProduct queryPage="page" start={0} />);

    const prevButton = screen.getByAltText('arrow-left icon');
    fireEvent.click(prevButton);

    expect(mockPush).toHaveBeenCalledWith('?page=0', { scroll: false });
  });
});
