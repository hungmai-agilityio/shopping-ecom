import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, openModal, closeModal, toggleModal };
};

