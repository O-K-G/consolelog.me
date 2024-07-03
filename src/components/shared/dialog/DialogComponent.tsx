'use client';

import CloseIcon from '@components/icons/CloseIcon';
import IconButton from '@components/shared/IconButton';
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
  {
    isFade,
    onClick,
    title,
    contentSlot,
    sizeClassName = 'w-full h-[50svh] md:w-[50svw] md:h-[50svw] lg:w-[40dvw] lg:h-[40dvw]',
    className = 'size-full p-4 center-elements bg-transparent',
    dialogWindowClassName = 'lg:cursor-default relative p-4 text-white text-xl font-bebas-neue bg-black rounded-md overflow-hidden',
    titleClassName = 'flex items-center justify-end w-full h-[10%]',
    closeIconComponent = (
      <CloseIcon className='h-full fill-white group-hover:fill-title-purple group-active:fill-white group-focus:fill-title-purple' />
    ),
  }: DialogComponentProps,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const t = useText();

  useEffect(() => {
    const currentDialogRefEl = (ref as MutableRefObject<HTMLDialogElement>)
      .current;

    if (!currentDialogRefEl.open) {
      currentDialogRefEl.showModal();
    }
  }, [ref]);

  return (
    <dialog
      data-testid={DATA_TEST_ID}
      ref={ref}
      className={`${isFade ? 'animate-dialog-fade-in' : ''} ${
        isFade === false ? 'animate-dialog-fade-out' : ''
      } ${className}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role='presentation'
        className={`${dialogWindowClassName} ${sizeClassName}`}
      >
        <div className={`${titleClassName}`}>
          <h2 className='h-full w-1/3 center-elements'>{title}</h2>
          <div className='flex items-center justify-end w-1/3 h-full'>
            <IconButton
              onClick={onClick}
              className='size-16'
              aria-label={t('close', dialogComponentText)}
              icon={closeIconComponent}
            />
          </div>
        </div>
        {contentSlot}
      </div>
    </dialog>
  );
}

export default forwardRef(DialogComponent);
