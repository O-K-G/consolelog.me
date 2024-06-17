'use client';

import { useText } from '@hooks/useText';
import errorDialog from '@i18nEn/errorDialog.json';
import CloseIcon from '@components/CloseIcon';
import type { ErrorDialogProps } from '@constants/interfaces';
import {
  type ForwardedRef,
  type MutableRefObject,
  forwardRef,
  useEffect,
} from 'react';

function ErrorDialog(
  { isFade, onClick, errorDetails }: ErrorDialogProps,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const t = useText();

  useEffect(
    () => (ref as MutableRefObject<HTMLDialogElement>).current.showModal(),
    [ref]
  );

  return (
    <dialog
      ref={ref}
      className={`size-full p-4 center-elements bg-transparent ${
        isFade ? 'animate-dialog-fade-in' : ''
      } ${isFade === false ? 'animate-dialog-fade-out' : ''}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role='presentation'
        className='lg:cursor-default relative w-full h-[50svh] md:w-[50svw] md:h-[50svw] lg:w-[40dvw] lg:h-[40dvw] p-4 text-white text-xl font-bebas-neue bg-black rounded-md overflow-hidden'
      >
        <div className='flex items-center justify-end w-full h-[10%]'>
          <h2 className='h-full w-1/3 center-elements'>
            {t('error', errorDialog)}
          </h2>
          <div className='flex items-center justify-end w-1/3 h-full'>
            <button
              aria-label='Close'
              type='button'
              className='group center-elements h-full outline-none'
              onClick={onClick}
            >
              <CloseIcon className='h-full fill-white group-hover:fill-title-purple group-active:fill-white group-focus:fill-title-purple' />
            </button>
          </div>
        </div>
        <div className='w-full break-words text-base md:text-xl lg:text-2xl h-[90%] flex items-center justify-start flex-col overflow-hidden'>
          <p
            role='alert'
            className='font-montserrat pb-4 w-full h-1/2 flex items-start lg:items-center justify-start text-center overflow-auto'
          >
            {t('errorMessage', errorDialog)}
          </p>

          <p
            className={`w-full h-1/2 flex overflow-auto border-t pt-4 border-white ${
              errorDetails
                ? 'items-start justify-start '
                : 'items-center justify-center '
            }`}
          >
            {t('errorDetails', errorDialog)}
            {errorDetails || 'No error details found.'}
          </p>
        </div>
      </div>
    </dialog>
  );
}

export default forwardRef(ErrorDialog);
