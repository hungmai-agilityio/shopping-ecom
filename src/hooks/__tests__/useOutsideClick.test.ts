import { fireEvent, renderHook } from '@testing-library/react';

// Hooks
import { useOutsideClick } from '@/hooks';

describe('useOutsideClick', () => {
  it('should call the handler when clicking outside the element', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useOutsideClick({ ref, handler }));

    fireEvent.mouseDown(document);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should not call the handler when clicking inside the element', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };

    renderHook(() => useOutsideClick({ ref, handler }));

    fireEvent.mouseDown(ref.current!);

    expect(handler).not.toHaveBeenCalled();
  });
});
