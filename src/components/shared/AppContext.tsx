'use client';

import useHandleModal from '@hooks/useHandleModal';
import type {
  AppContextProps,
  AppContextComponentProps,
} from '@constants/interfaces';
import {
  type ReactNode,
  createContext,
  useState,
  useMemo,
  useRef,
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

  const { handleCloseModal } = useHandleModal({
    modalRef,
    modalContent,
    onModalChange: setModalContent,
  });

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
