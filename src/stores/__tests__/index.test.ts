import { act, renderHook } from '@testing-library/react';
import { useUserStore } from '@/stores';

describe('useUserStore', () => {
  test('Should initialize with null userId', () => {
    const { result } = renderHook(() => useUserStore());
    expect(result.current.userId).toBeNull();
  });

  test('Should set userId correctly', () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setUserId('testUserId');
    });

    expect(result.current.userId).toBe('testUserId');
  });

  test('Should get userId correctly', () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setUserId('testUserId');
    });

    expect(result.current.getUserId()).toBe('testUserId');
  });

  test('Should remove userId correctly', () => {
    const { result } = renderHook(() => useUserStore());

    act(() => {
      result.current.setUserId('testUserId');
      result.current.removeUserId();
    });

    expect(result.current.userId).toBeNull();
  });
});
