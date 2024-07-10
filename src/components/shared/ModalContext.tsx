'use client';

import useHandleModal from '@hooks/useHandleModal';
import type {
  ModalContextProps,
  ModalContextComponentProps,
} from '@constants/interfaces';
import {
  type ReactNode,
  createContext,
  useState,
  useMemo,
  useRef,
} from 'react';

export const ModalContext = createContext({
  onModalContentChange: () => null,
  modalRef: { current: null },
  modalContent: null,
  onCloseModal: () => null,
} as ModalContextProps);

export default function ModalContextComponent({
  children,
}: ModalContextComponentProps) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const modalRef = useRef(null);

  const { handleCloseModal } = useHandleModal({
    modalRef,
    modalContent,
    onModalChange: setModalContent,
  });

  const ModalContextData = useMemo(
    () => ({
      onModalContentChange: setModalContent,
      onCloseModal: (e: Event | React.MouseEvent<HTMLElement>) =>
        handleCloseModal(e, 'close'),
      modalRef,
      modalContent,
    }),
    [handleCloseModal, modalContent]
  );

  return (
    <ModalContext.Provider value={ModalContextData}>
      {children}
    </ModalContext.Provider>
  );
}
