'use client';

import type { DialogBackdropProps } from '@constants/interfaces';
import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@components/CloseIcon';
import { useDisableScroll } from '@hooks/useDisableScroll';

export default function DialogBackdrop({
  open,
  onClick,
  errorDetails,
}: DialogBackdropProps) {
  const [isFade, setIsFade] = useState<null | boolean>(null);
  const { handleDisableScroll } = useDisableScroll();
  const dialogContainerRef = useRef(null);

  const handleTransitionEnd = () => {
    handleDisableScroll(false);
    setIsFade(null);
    onClick?.();
    (
      dialogContainerRef.current as unknown as HTMLDivElement
    )?.removeEventListener('animationend', handleTransitionEnd);
  };

  useEffect(() => {
    if (isFade === null && open) {
      handleDisableScroll(true);
      setIsFade(true);
    }
  }, [handleDisableScroll, isFade, onClick, open]);

  const handleClick = () => {
    setIsFade(false);
    (dialogContainerRef.current as unknown as HTMLDivElement)?.addEventListener(
      'animationend',
      handleTransitionEnd
    );
  };

  if (open) {
    return (
      <div
        onClick={handleClick}
        role='presentation'
        ref={dialogContainerRef}
        className={`lg:cursor-pointer ${
          isFade ? 'animate-dialog-backdrop-fade-in' : 'hidden'
        } ${isFade === false ? 'animate-dialog-backdrop-fade-out' : ''}`}
      >
        <dialog
          open
          className={`size-full p-4 center-elements bg-transparent ${
            isFade ? 'animate-dialog-fade-in' : ''
          } ${isFade === false ? 'animate-dialog-fade-out' : ''}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role='textbox'
            tabIndex={-1}
            className='lg:cursor-default relative w-full h-[50svh] md:w-[50svw] md:h-[50svw] lg:w-[40dvw] lg:h-[40dvw] p-4 text-white text-xl font-bebas-neue bg-black rounded-md'
          >
            <div className='flex items-center justify-end w-full h-[10%]'>
              <h2 className='h-full w-1/3 center-elements'>Error</h2>
              <div className='flex items-center justify-end w-1/3 h-full'>
                <button
                  type='button'
                  className='group center-elements h-full outline-none'
                  onClick={handleClick}
                >
                  <CloseIcon className='h-full fill-white group-hover:fill-title-purple group-active:fill-white group-focus:fill-title-purple' />
                </button>
              </div>
            </div>
          </div>
          <div />
        </dialog>
      </div>
    );
  }
}
