'use client';

import { type AppContextComponentProps } from '@constants/interfaces';
import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
  createContext,
  useState,
  useMemo,
  useRef,
  type ReactNode,
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
} as {
  currentTopSection: string;
  onChange: Dispatch<SetStateAction<string>>;
  onModalContentChange: Dispatch<SetStateAction<ReactNode>>;
  contactSectionRef: MutableRefObject<HTMLElement | null>;
  modalRef: MutableRefObject<HTMLDialogElement | null>;
  modalContent: ReactNode;
  onCloseModal: (e: MouseEvent, val: 'close') => void;
});

export default function AppContextComponent({
  children,
}: AppContextComponentProps) {
  const [currentTopSection, setCurrentTopSection] = useState('about');
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const contactSectionRef = useRef(null);
  const modalRef = useRef(null);

  const onCloseModal = useCallback(
    (e: MouseEvent, val?: 'close') => {
      const modalEl = modalRef.current as unknown as HTMLDialogElement;
      const { open } = modalEl;
      const { tagName } = (e.target as unknown as { tagName: string }) || {};
      console.log(tagName);
      if (tagName === 'DIALOG' || val === 'close') {
        if (modalContent) {
          setModalContent(null);
        }
        modalEl.removeEventListener('click', onCloseModal);

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
      modalEl.addEventListener('click', onCloseModal);
    } else if (!modalContent && open) {
      modalEl.close();
      modalEl.removeEventListener('click', onCloseModal);
    }

    return () => modalEl.removeEventListener('click', onCloseModal);
  }, [modalContent, onCloseModal]);

  const AppContextData = useMemo(
    () => ({
      currentTopSection,
      onChange: setCurrentTopSection,
      onModalContentChange: setModalContent,
      onCloseModal,
      contactSectionRef,
      modalRef,
      modalContent,
    }),
    [currentTopSection, modalContent, onCloseModal]
  );

  return (
    <AppContext.Provider value={AppContextData}>{children}</AppContext.Provider>
  );
}
