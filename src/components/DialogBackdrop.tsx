'use client';

import type { DialogBackdropProps } from '@constants/interfaces';
import { useEffect, useRef, useState } from 'react';

export default function DialogBackdrop({ open, onClick }: DialogBackdropProps) {
  const [isFade, setIsFade] = useState<null | boolean>(null);
  const dialogContainerRef = useRef(null);

  const handleTransitionEnd = () => {
    setIsFade(null);
    onClick?.();
    (
      dialogContainerRef.current as unknown as HTMLDivElement
    )?.removeEventListener('animationend', handleTransitionEnd);
  };

  useEffect(() => {
    if (isFade === null && open) {
      setIsFade(true);
    }
  }, [isFade, onClick, open]);

  if (open) {
    return (
      <div
        ref={dialogContainerRef}
        className={`${isFade ? 'animate-dialog-backdrop-fade-in' : 'hidden'} ${
          isFade === false ? 'animate-dialog-backdrop-fade-out' : ''
        }`}
      >
        <dialog
          open
          className={`text-white size-full p-4 center-elements bg-transparent ${
            isFade ? 'animate-dialog-fade-in' : ''
          } ${isFade === false ? 'animate-dialog-fade-out' : ''}`}
        >
          <div className='relative w-full h-[50svh] md:w-[50svw] md:h-[50svw] lg:w-[40dvw] lg:h-[40dvw] bg-black'>
            <div className='w-full border border-red-500'>
              <button
                type='button'
                onClick={() => {
                  setIsFade(false);
                  (
                    dialogContainerRef.current as unknown as HTMLDivElement
                  )?.addEventListener('animationend', handleTransitionEnd);
                }}
              >
                Testz
              </button>
            </div>
          </div>
          <div />
        </dialog>
      </div>
    );
  }
}
