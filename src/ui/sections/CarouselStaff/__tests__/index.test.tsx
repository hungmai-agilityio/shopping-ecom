import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Sections
import { CarouselStaff } from '@/ui/sections';

// Constants
import { slideStaff } from '@/constants';

describe('CarouselStaff Component', () => {
  test('Should renders the correct number of slides per page', () => {
    render(<CarouselStaff slides={slideStaff} />);

    expect(screen.getByText('Tom Cruise')).toBeInTheDocument();
    expect(screen.getByText('Founder & Chairman')).toBeInTheDocument();
  });

  test('Should renders pagination buttons correctly', () => {
    render(<CarouselStaff slides={slideStaff} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  test('Changes slides when clicking pagination buttons', () => {
    render(<CarouselStaff slides={slideStaff} />);

    expect(screen.getByText('Tom Cruise')).toBeInTheDocument();
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]);

    expect(screen.getByText('Chris Evans')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();

    expect(screen.queryByText('Tom Cruise')).not.toBeInTheDocument();
  });

  test('pagination button highlights the active page', () => {
    render(<CarouselStaff slides={slideStaff} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons[0]).toHaveClass('bg-gray-800');

    fireEvent.click(buttons[1]);

    expect(buttons[1]).toHaveClass('bg-gray-800');
    expect(buttons[0]).toHaveClass('bg-gray-300');
  });
});
