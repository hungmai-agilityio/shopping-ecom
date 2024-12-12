import { render } from '@testing-library/react';
import { SkeletonProductList } from '@/ui/components';

describe('Skeleton component', () => {
  test('should be render match to snapshot', () => {
    const { container } = render(<SkeletonProductList />);

    expect(container).toMatchSnapshot();
  });
});
