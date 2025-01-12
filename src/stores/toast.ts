import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { STATUS, POSITION } from '@/constants';

interface Toast {
  id: string;
  message: string;
  status: STATUS;
  position: POSITION;
}

interface ToastStore {
  toasts: Toast[];
  success: (message: string, position?: POSITION) => void;
  error: (message: string, position?: POSITION) => void;
  warning: (message: string, position?: POSITION) => void;
  removeToast: (id: string) => void;
}

export const useToast = create<ToastStore>((set) => ({
  toasts: [],
  success: (message, position = POSITION.TOP_RIGHT) => {
    const id = uuidv4();
    set((state) => ({
      toasts: [
        ...state.toasts,
        { id, message, status: STATUS.SUCCESS, position }
      ]
    }));
    setTimeout(
      () =>
        set((state) => ({
          toasts: state.toasts.filter((toast) => toast.id !== id)
        })),
      3000
    );
  },
  error: (message, position = POSITION.TOP_RIGHT) => {
    const id = uuidv4();
    set((state) => ({
      toasts: [...state.toasts, { id, message, status: STATUS.ERROR, position }]
    }));
    setTimeout(
      () =>
        set((state) => ({
          toasts: state.toasts.filter((toast) => toast.id !== id)
        })),
      3000
    );
  },
  warning: (message, position = POSITION.TOP_RIGHT) => {
    const id = uuidv4();
    set((state) => ({
      toasts: [
        ...state.toasts,
        { id, message, status: STATUS.WARNING, position }
      ]
    }));
    setTimeout(
      () =>
        set((state) => ({
          toasts: state.toasts.filter((toast) => toast.id !== id)
        })),
      3000
    );
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id)
    }))
}));
