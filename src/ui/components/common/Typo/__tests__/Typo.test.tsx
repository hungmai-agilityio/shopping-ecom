import { render, screen } from '@testing-library/react';

// Components
import { Heading } from '@/ui/components/common';

// Constants
import { inter } from '@/constants';

describe('Heading Component', () => {
  test('should render the heading with the correct children', () => {
    render(<Heading>Test Heading</Heading>);

    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  test('should apply the correct className for heading, including default styles and additional styles', () => {
    const customStyles = 'text-red-500';

    render(<Heading styles={customStyles}>Test Heading</Heading>);
    const headingElement = screen.getByText('Test Heading');

    expect(headingElement).toHaveClass(inter.className);
    expect(headingElement).toHaveClass(
      'lg:text-4xl font-semibold md:text-3xl md:leading-normal sm:text-xl text-red-500'
    );
    expect(headingElement).toHaveClass(customStyles);
  });
});

