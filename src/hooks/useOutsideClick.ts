import { RefObject, useEffect } from 'react';

interface OutsideClickProps {
  ref: RefObject<HTMLElement>;
  handler: () => void;
}

/**
 * Handle custom click outside to close Dropdown
 * @param {RefObject<HTMLElement>} ref
 * @param {Function} handler
 */
export const useOutsideClick = ({ ref, handler }: OutsideClickProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
};
