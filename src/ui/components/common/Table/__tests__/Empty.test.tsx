import { render, screen } from '@testing-library/react';

// Components
import { Empty } from '@/ui/components';

describe('Empty component', () => {
  test('Should render component default', () => {
    render(<Empty />);

    const empty = screen.getByAltText('cart empty');
    expect(empty).toBeInTheDocument();
  });
});
