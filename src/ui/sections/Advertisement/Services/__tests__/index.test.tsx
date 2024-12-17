import { render, screen } from '@testing-library/react';
import { ServiceSection } from '@/ui/sections';

describe('Advertisement Sale section', () => {
  test('Should render Sale section', () => {
    render(<ServiceSection />);
    const title = screen.getByText('FREE AND FAST DELIVERY');
    const img = screen.getByAltText('icon shop');

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
