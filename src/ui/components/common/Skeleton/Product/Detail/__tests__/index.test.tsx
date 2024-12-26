import { render } from '@testing-library/react';
import { SkeletonProductDetail } from '@/ui/components';

describe('SkeletonProductDetail component', () => {
  test('should be render match to snapshot', () => {
    const { container } = render(<SkeletonProductDetail />);

    expect(container).toMatchSnapshot();
  });
});
