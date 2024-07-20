import useHandleScroll from '@hooks/useHandleScroll';
import {
  type MutableRefObject,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
} from 'react';

export default function useHandleModal({
  modalRef,
  modalContent,
  onModalChange: setModalContent,
}: {
  modalRef: MutableRefObject<null>;
  modalContent: ReactNode;
  onModalChange: (val: ReactNode | null) => void;
}) {
  const { disableScroll, enableScroll } = useHandleScroll();
  const handleCloseModal = useCallback(
    (e: Event | MouseEvent<HTMLElement>, val?: 'close') => {
      const modalEl = modalRef.current as unknown as HTMLDialogElement;
      const { open } = modalEl;
      const { tagName } = (e.target as unknown as { tagName: string }) || {};

      if (tagName?.toLocaleLowerCase() === 'dialog' || val === 'close') {
        if (modalContent) {
          modalEl.removeEventListener('click', handleCloseModal);

          if (open) {
            modalEl.close();
          }
          enableScroll();
          setModalContent(null);
        }
      }
    },
    [enableScroll, modalContent, modalRef, setModalContent]
  );

  useEffect(() => {
    const modalEl = modalRef.current as unknown as HTMLDialogElement;
    const { open } = modalEl || {};

    if (modalContent && !open) {
      modalEl?.showModal();
      modalEl?.addEventListener('click', handleCloseModal);
      disableScroll();
    }

    return () => modalEl?.removeEventListener('click', handleCloseModal);
  }, [disableScroll, handleCloseModal, modalContent, modalRef]);

  return { handleCloseModal };
}
