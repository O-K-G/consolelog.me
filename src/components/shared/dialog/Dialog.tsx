'use client';

import { useContext } from 'react';
import { ModalContext as modalContext } from '@components/shared/ModalContext';

export const DIALOG_TEST_ID = 'dialog-test-id';

export default function Dialog() {
  const { modalRef, modalContent } = useContext(modalContext);

  if (!modalContent) {
    return null;
  }

  return (
    <dialog
      data-testid={DIALOG_TEST_ID}
      ref={modalRef}
      className='backdrop:hidden lg:cursor-pointer min-h-[100vh] min-w-[100vw] bg-black/50'
    >
      <div className='size-fit absolute top-0 bottom-0 left-0 right-0 m-auto'>
        {modalContent}
      </div>
    </dialog>
  );
}
