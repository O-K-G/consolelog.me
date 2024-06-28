'use client';

import CloseIcon from '@components/shared/CloseIcon';
import type { DialogComponentProps } from '@constants/interfaces';
import dialogComponentText from '@i18nEn/dialogComponentText.json';
import { useText } from '@hooks/useText';
import {
  type ForwardedRef,
  type MutableRefObject,
  forwardRef,
  useEffect,
} from 'react';

const DATA_TEST_ID = 'dialog-backdrop-test';

function DialogComponent(
  { isFade, onClick, title, contentSlot }: DialogComponentProps,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const t = useText();

  useEffect(
    () => (ref as MutableRefObject<HTMLDialogElement>).current.showModal(),
    [ref]
  );

  return (
    <dialog
      data-testid={DATA_TEST_ID}
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
          <h2 className='h-full w-1/3 center-elements'>{title}</h2>
          <div className='flex items-center justify-end w-1/3 h-full'>
            <button
              aria-label={t('close', dialogComponentText)}
              type='button'
              className='group center-elements h-full outline-none'
              onClick={onClick}
            >
              <CloseIcon className='h-full fill-white group-hover:fill-title-purple group-active:fill-white group-focus:fill-title-purple' />
            </button>
          </div>
        </div>
        {contentSlot}
      </div>
    </dialog>
  );
}

export default forwardRef(DialogComponent);
