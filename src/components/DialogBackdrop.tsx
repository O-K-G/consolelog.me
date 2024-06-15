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
            className='lg:cursor-default relative w-full h-[50svh] md:w-[50svw] md:h-[50svw] lg:w-[40dvw] lg:h-[40dvw] p-4 text-white text-xl font-bebas-neue bg-black rounded-md overflow-hidden'
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
            <div className='w-full break-words h-[90%] flex items-center justify-start flex-col overflow-hidden'>
              <p className='font-montserrat pb-4 w-full h-1/2 center-elements text-center overflow-auto'>
                Sorry, but something went wrong. You can either close this
                window and try again, or read the error details below, if
                available.
              </p>

              <p
                className={`w-full h-1/2 flex overflow-auto border-t pt-4 border-white ${
                  errorDetails
                    ? 'items-start justify-start '
                    : 'items-center justify-center '
                }`}
              >
                Error details:&nbsp;
                {errorDetails
                  ? `xxxxxvxxxxxvxxxxxvxxxxxvxxxx xxxxxxxxxxxxxxx
                  xxxxx xxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxx xxxxxxx xxxxxv xxxxxvxxxxxv xxxxxvxxxxxv
                  xxxxxvxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  xxxxxxxxxxxxxxx xxxxxv xxxxxv xxxxxv xxxxxv
                  xxxxxxxxxxxxxxxxxxxxv xxxxxv
                  xxxxxvxxxxxvxxxxxvxxxxxvxxxxxvxxxxxvxxxxxvxxxxxvxxxxxvxv`
                  : 'No error details found.'}
              </p>
            </div>
          </div>
        </dialog>
      </div>
    );
  }
}
