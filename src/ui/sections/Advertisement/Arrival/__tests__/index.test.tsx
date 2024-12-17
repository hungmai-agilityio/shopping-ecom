import { render, screen } from '@testing-library/react';
import { Arrival } from '@/ui/sections';

describe('Arrival Sale section', () => {
  test('Should render Sale section', () => {
    render(<Arrival />);
    const title = screen.getByText('PlayStation 5');
    const img = screen.getByAltText('ads-1');

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
