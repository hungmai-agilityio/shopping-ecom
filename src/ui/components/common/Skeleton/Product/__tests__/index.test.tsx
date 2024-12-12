import { render } from '@testing-library/react';
import { SkeletonProduct } from '@/ui/components';

describe('Skeleton component', () => {
  test('should be render match to snapshot', () => {
    const { container } = render(<SkeletonProduct />);

    expect(container).toMatchSnapshot();
  });
});
