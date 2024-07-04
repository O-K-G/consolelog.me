'use client';

import { useContext } from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';

export default function Dialog() {
  const { modalRef, modalContent } = useContext(appContext);

  return (
    <dialog
      id='dialogBackdrop'
      ref={modalRef}
      className='backdrop:hidden lg:cursor-pointer min-h-[100vh] min-w-[100vw] bg-black/50'
    >
      <div className='size-fit absolute top-0 bottom-0 left-0 right-0 m-auto'>
        {modalContent}
      </div>
    </dialog>
  );
}
