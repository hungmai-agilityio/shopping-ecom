import CardContact from '@/ui/sections/Contact/Card';
import { render, screen } from '@testing-library/react';

describe('CardContact section', () => {
  test('Should render card contact default', () => {
    render(<CardContact />);

    expect(screen.getByText('Call To Us')).toBeInTheDocument();
    expect(screen.getByText('Phone: +8801611112222')).toBeInTheDocument();
  });
});
