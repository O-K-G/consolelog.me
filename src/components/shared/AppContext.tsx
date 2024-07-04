'use client';

import type {
  AppContextProps,
  AppContextComponentProps,
} from '@constants/interfaces';
import {
  type ReactNode,
  type MouseEvent,
  createContext,
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from 'react';

export const AppContext = createContext({
  currentTopSection: 'about',
  onChange: () => null,
  onModalContentChange: () => null,
  contactSectionRef: { current: null },
  modalRef: { current: null },
  modalContent: null,
  onCloseModal: () => null,
} as AppContextProps);

export default function AppContextComponent({
  children,
}: AppContextComponentProps) {
  const [currentTopSection, setCurrentTopSection] = useState('about');
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const contactSectionRef = useRef(null);
  const modalRef = useRef(null);

  const handleCloseModal = useCallback(
    (e: Event | MouseEvent<HTMLElement>, val?: 'close') => {
      const modalEl = modalRef.current as unknown as HTMLDialogElement;
      const { open } = modalEl;
      const { tagName } = (e.target as unknown as { tagName: string }) || {};

      if (tagName?.toLocaleLowerCase() === 'dialog' || val === 'close') {
        if (modalContent) {
          setModalContent(null);
        }
        modalEl.removeEventListener('click', handleCloseModal);

        if (open) {
          modalEl.close();
        }
      }
    },
    [modalContent]
  );

  useEffect(() => {
    const modalEl = modalRef.current as unknown as HTMLDialogElement;
    const { open } = modalEl;

    if (modalContent && !open) {
      modalEl.showModal();
      modalEl.addEventListener('click', handleCloseModal);
    } else if (!modalContent && open) {
      modalEl.close();
      modalEl.removeEventListener('click', handleCloseModal);
    }

    return () => modalEl.removeEventListener('click', handleCloseModal);
  }, [modalContent, handleCloseModal]);

  const AppContextData = useMemo(
    () => ({
      currentTopSection,
      onChange: setCurrentTopSection,
      onModalContentChange: setModalContent,
      onCloseModal: (e: Event | React.MouseEvent<HTMLElement>) =>
        handleCloseModal(e, 'close'),
      contactSectionRef,
      modalRef,
      modalContent,
    }),
    [currentTopSection, handleCloseModal, modalContent]
  );

  return (
    <AppContext.Provider value={AppContextData}>{children}</AppContext.Provider>
  );
}
