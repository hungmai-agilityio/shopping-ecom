import { render, screen } from '@testing-library/react';

// Sections
import Footer from '@/ui/sections/Footer';

describe('Footer Component', () => {
  test('Should render component', () => {
    render(<Footer />);

    const logo = screen.getByText('Exclusive');

    expect(logo).toBeInTheDocument();
  });
});
