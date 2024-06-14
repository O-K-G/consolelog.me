'use client';

import CloseIcon from '@components/CloseIcon';
import {
  type ForwardedRef,
  type PropsWithChildren,
  type RefObject,
  forwardRef,
} from 'react';

function ErrorDialog(
  props: PropsWithChildren,
  ref: ForwardedRef<HTMLDialogElement>
) {
  return (
    <dialog
      ref={ref}
      className='backdrop:p-4 size-3/12 backdrop:bg-black/90 hidden open:flex flex-col justify-start items-center text-white font-star-date-81316 text-base sm:text-2xl w-full h-[50svw] md:w-[50svw] lg:size-1/2 bg-black border border-white rounded-md overflow-hidden'
    >
      <div className='w-full h-10 flex items-center justify-end bg-title-purple/30'>
        <h2 className='center-elements w-1/3 h-full'>Error</h2>
        <div className='flex items-center justify-end h-full w-1/3'>
          <button
            onClick={() =>
              (ref as RefObject<HTMLDialogElement>)?.current?.close()
            }
            type='button'
            className='h-full center-elements'
          >
            <CloseIcon className='h-full fill-white' />
          </button>
        </div>
      </div>
      <div className='size-full center-elements flex-col'>
        <p className='center-elements overflow-hidden'>
          Sorry, but something went wrong.
          <br />
          You can either close this message and try again,
          <br />
          or check the error by clicking the button below.
        </p>
        <button type='button' className='' onClick={() => console.log('TODO')}>
          {/* TODO */}
          Check error
        </button>
      </div>
    </dialog>
  );
}

export default forwardRef(ErrorDialog);
