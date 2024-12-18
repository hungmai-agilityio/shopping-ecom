import { render, screen } from '@testing-library/react';
import { Advertisement } from '@/ui/sections';

describe('Advertisement section', () => {
  test('Render component default', () => {
    render(<Advertisement />);

    expect(
      screen.getByText('Enhance Your Music Experience')
    ).toBeInTheDocument();
  });
});
