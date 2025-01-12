'use client';

import { useToast } from '@/stores/toast';
import { ToastMessage } from '@/ui/components';

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            className="absolute transition-transform"
            style={{ transform: `translateY(${index * 60}px)` }}
          >
            <ToastMessage
              status={toast.status}
              message={toast.message}
              position={toast.position}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;

