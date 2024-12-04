import { render, screen } from '@testing-library/react';

// Components
import { CardInfo } from '@/ui/components';

describe('CardInfo component', () => {
  test('Should render component with default props', () => {
    render(
      <CardInfo image="/lead.png" name="Tom Cruise" desc="Founder & Chairman" />
    );
    const img = screen.getByAltText('Tom Cruise');
    const name = screen.getByText('Tom Cruise');

    expect(img).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  test('Should be render match to snapshot', () => {
    const { container } = render(
      <CardInfo image="/lead.png" name="Tom Cruise" desc="Founder & Chairman" />
    );
    expect(container).toMatchSnapshot();
  });
});
