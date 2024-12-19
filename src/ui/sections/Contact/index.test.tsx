import ContactSection from '@/ui/sections/Contact';
import { render, screen } from '@testing-library/react';

describe('Contact section', () => {
  test('Should render form contact section', () => {
    render(<ContactSection />);

    expect(screen.getByText('Send Message')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Name *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Email *')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your Phone *')).toBeInTheDocument();
  });
});
