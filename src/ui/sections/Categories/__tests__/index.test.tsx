import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CategorySection } from '@/ui/sections';
import { categories } from '@/mock';

jest.mock('next/navigation');

describe('CategorySection Component', () => {
  const queryParam = 'category';

  const mockPush = jest.fn();
  const mockSearchParams = new URLSearchParams('');

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
    jest.clearAllMocks();
  });

  test('Should renders categories correctly', () => {
    render(<CategorySection categories={categories} queryParam={queryParam} />);

    expect(screen.getByText('Phones')).toBeInTheDocument();
    expect(screen.getByText('Computers')).toBeInTheDocument();
  });

  test('Updates selected category and calls push with query params', () => {
    render(<CategorySection categories={categories} queryParam={queryParam} />);

    const phoneCategory = screen.getByText('Phones');
    fireEvent.click(phoneCategory);

    expect(mockPush).toHaveBeenCalledWith('?category=phone', {
      scroll: false
    });
  });

  test('preselects category from query params', () => {
    const preselectedParams = new URLSearchParams('?category=phone');
    (useSearchParams as jest.Mock).mockReturnValue(preselectedParams);

    render(<CategorySection categories={categories} queryParam={queryParam} />);

    const laptopCategory = screen.getByText('Phones');
    expect(laptopCategory).toBeInTheDocument();
  });
});
