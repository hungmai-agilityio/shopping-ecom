import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { KEY } from '@/constants';

interface UserStore {
  userId: string | null;
  setUserId: (userId: string | null) => void;
  getUserId: () => string | null;
  removeUserId: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      userId: null,
      setUserId: (userId) => set({ userId }),
      getUserId: () => get().userId,
      removeUserId: () => set({ userId: null })
    }),
    {
      name: KEY.USER
    }
  )
);
