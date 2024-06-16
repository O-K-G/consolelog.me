'use client';

import { useText } from '@hooks/useText';
import inputComponentText from '@i18nEn/inputComponentText.json';
import AlignLeftIcon from '@components/AlignLeftIcon';
import type { BottomInputComponentButtonsProps } from '@constants/interfaces';
import { useFormStatus } from 'react-dom';
import ProgressIcon from '@components/ProgressIcon';

const ALIGN_BUTTONS_CLASSNAME =
  'group h-12 p-1.5 shrink-0 hover:bg-black/70 active:bg-black/70 focus:bg-black/70 rounded-full center-elements outline-none';

const ALIGN_ICONS_CLASSNAME =
  'size-full rounded-full fill-white group-hover:fill-title-purple group-active:fill-white group-focus:fill-title-purple shrink-0';

export default function BottomInputComponentButtons({
  onClick,
  isSubmitDisabled,
}: BottomInputComponentButtonsProps) {
  const { pending: isLoading } = useFormStatus(); // TODO: Experimental, revisit in the future.
  const t = useText();

  return (
    <div className='flex items-center justify-end w-full mt-2 h-12 overflow-hidden'>
      <div
        className={`transition-300 overflow-hidden w-1/3 h-full flex items-center justify-start ${
          !isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <ProgressIcon className='h-full rounded-full shrink-0 fill-white animate-spin' />
      </div>
      <div className='w-1/3 overflow-hidden center-elements'>
        <button
          disabled={isLoading ?? isSubmitDisabled}
          type='submit'
          className={`relative h-full p-2 before:-z-10 before:size-full before:absolute before:hover:bg-black/70 before:active:bg-black/70 before:focus:bg-black/70 before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:rounded-full font-bebas-neue text-xl sm:text-3xl uppercase active:text-white outline-none ${
            isLoading ?? isSubmitDisabled
              ? 'text-white opacity-50 before:hidden cursor-not-allowed'
              : 'hover:text-title-purple focus:text-title-purple'
          }`}
        >
          {t('send', inputComponentText as object)}
        </button>
      </div>
      <div className='w-1/3 overflow-hidden gap-2 flex rtl:flex-row-reverse rtl:justify-start items-center justify-end'>
        <button
          onClick={() => onClick?.('ltr')}
          type='button'
          className={ALIGN_BUTTONS_CLASSNAME}
        >
          <AlignLeftIcon className={ALIGN_ICONS_CLASSNAME} />
        </button>
        <button
          onClick={() => onClick?.('rtl')}
          type='button'
          className={ALIGN_BUTTONS_CLASSNAME}
        >
          <AlignLeftIcon className={`${ALIGN_ICONS_CLASSNAME} rotate-180`} />
        </button>
      </div>
    </div>
  );
}
