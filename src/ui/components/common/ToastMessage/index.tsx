'use client';

import { clsx } from 'clsx';
import { useEffect, useState } from 'react';

// Constants
import { POSITION, STATUS, toastStyles } from '@/constants';

interface ToastProps {
  status: STATUS.SUCCESS | STATUS.ERROR | STATUS.WARNING;
  message: string;
  duration?: number;
  position?:
    | POSITION.TOP_LEFT
    | POSITION.TOP_RIGHT
    | POSITION.BOT_LEFT
    | POSITION.BOT_RIGHT;
}

const ToastMessage = ({
  status,
  message,
  duration = 3000,
  position
}: ToastProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  const positionClass = {
    [POSITION.TOP_RIGHT]: 'top-4 right-4',
    [POSITION.TOP_LEFT]: 'top-4 left-4',
    [POSITION.BOT_RIGHT]: 'bottom-4 right-4',
    [POSITION.BOT_LEFT]: 'bottom-4 left-4'
  };

  const setPosition = positionClass[position || POSITION.TOP_RIGHT];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={clsx(
        'text-white font-semibold fixed py-2 px-4 rounded shadow-lg transition-opacity ease-in-out max-w-lg truncate',
        toastStyles[status],
        setPosition
      )}
    >
      {message}
    </div>
  );
};

export default ToastMessage;
