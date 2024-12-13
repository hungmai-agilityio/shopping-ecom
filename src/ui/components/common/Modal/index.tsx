import { ReactNode } from 'react';

// Constants
import { SIZE, TYPE } from '@/constants';

// Components
import { Button } from '@/ui/components';
import { clsx } from 'clsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  btnSecond?: string;
  onClick?: () => void;
  styles?: string;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  btnSecond,
  onClick,
  styles
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className={clsx('bg-white rounded-lg shadow-lg z-10 w-96', styles)}>
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="p-4">{children}</div>
        <div className="p-4 border-t flex justify-between">
          <Button variant={TYPE.THIRD} size={SIZE.SMALL} onClick={onClose}>
            Close
          </Button>
          {onClick && (
            <Button onClick={onClick} size={SIZE.SMALL}>
              {btnSecond}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
