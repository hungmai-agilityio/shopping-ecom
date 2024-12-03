import { act, renderHook } from '@testing-library/react';

// Hooks
import { useQuantity } from '@/hooks';

describe('useQuantity', () => {
  test('Should initialize quantity to default value', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 5, min: 1, max: 10 })
    );
    expect(result.current.quantity).toBe(5);
  });

  test('Should increase quantity when increase is called', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 5, min: 1, max: 10 })
    );
    act(() => {
      result.current.increase();
    });
    expect(result.current.quantity).toBe(6);
  });

  test('Should not increase quantity above max', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 10, min: 1, max: 10 })
    );
    act(() => {
      result.current.increase();
    });
    expect(result.current.quantity).toBe(10);
  });

  test('Should decrease quantity when decrease is called', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 5, min: 1, max: 10 })
    );
    act(() => {
      result.current.decrease();
    });
    expect(result.current.quantity).toBe(4);
  });

  test('Should not decrease quantity below min', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 1, min: 1, max: 10 })
    );
    act(() => {
      result.current.decrease();
    });
    expect(result.current.quantity).toBe(1);
  });

  test('Should set quantity manually within the range', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 5, min: 1, max: 10 })
    );
    act(() => {
      result.current.setManual(3);
    });
    expect(result.current.quantity).toBe(3);
  });

  test('Should clamp manually set quantity to min if below range', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 5, min: 3, max: 10 })
    );
    act(() => {
      result.current.setManual(2);
    });
    expect(result.current.quantity).toBe(3);
  });

  test('Should clamp manually set quantity to max if above range', () => {
    const { result } = renderHook(() =>
      useQuantity({ value: 5, min: 1, max: 8 })
    );
    act(() => {
      result.current.setManual(9);
    });
    expect(result.current.quantity).toBe(8);
  });
});
