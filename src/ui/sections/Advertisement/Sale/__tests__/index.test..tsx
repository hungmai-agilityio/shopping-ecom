import { render, screen } from '@testing-library/react';
import { AdvertisementSale } from '@/ui/sections';

describe('Advertisement Sale section', () => {
  test('Should render Sale section', () => {
    render(<AdvertisementSale />);
    const title = screen.getByText('Sallers active our site');
    const img = screen.getByAltText('icon shop');

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
