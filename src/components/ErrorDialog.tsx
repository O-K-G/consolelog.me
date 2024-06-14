'use client';

import CloseIcon from '@components/CloseIcon';
import { type ForwardedRef, type RefObject, forwardRef } from 'react';
import { useDisableScroll } from '@hooks/useDisableScroll';
import type { ErrorDialogProps } from '@constants/interfaces';

function ErrorDialog(
  { errorDetails }: ErrorDialogProps,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const { handleDisableScroll } = useDisableScroll();

  return (
    <dialog
      ref={ref}
      className='backdrop:p-4 size-10/12 lg:max-h-[50%] lg:max-w-[50%] backdrop:bg-black/90 hidden open:flex flex-col justify-start items-center text-white font-montserrat text-base sm:text-2xl bg-black border border-white rounded-md overflow-hidden'
    >
      <div className='w-full h-10 flex items-center justify-end bg-title-purple/30'>
        <h2 className='center-elements w-1/3 h-full'>Error</h2>
        <div className='flex items-center justify-end h-full w-1/3'>
          <button
            onClick={() => {
              handleDisableScroll(false);
              (ref as RefObject<HTMLDialogElement>)?.current?.close();
            }}
            type='button'
            className='h-full center-elements'
          >
            <CloseIcon className='h-full fill-white' />
          </button>
        </div>
      </div>
      <div className='size-full flex items-center justify-evenly gap-4 px-4 flex-col'>
        {!errorDetails && (
          <p className='w-full center-elements text-center overflow-hidden'>
            Sorry, but something went wrong.
            <br />
            You can close this message and try again.
          </p>
        )}
        {errorDetails && (
          <p className='w-full center-elements text-center overflow-hidden'>
            Sorry, but something went wrong.
            <br />
            You can either close this message and try again,
            <br />
            or check the error below.
          </p>
        )}
        {errorDetails && (
          <div className='border-y text-base border-white w-full break-all overflow-auto h-1/3'>
            Error details: {errorDetails}
          </div>
        )}
      </div>
    </dialog>
  );
}

export default forwardRef(ErrorDialog);
