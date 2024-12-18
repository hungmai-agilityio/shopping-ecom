import StorySection from '@/ui/sections/StorySection';
import { render, screen } from '@testing-library/react';

describe('StorySection', () => {
  test('Should render section', () => {
    render(<StorySection />);

    expect(screen.getByText('Our Story')).toBeInTheDocument();
    expect(screen.getByAltText('about-image')).toBeInTheDocument();
  });
});
