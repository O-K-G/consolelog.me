'use client';

import { useText } from '@hooks/useText';
import inputComponent from '@i18nEn/inputComponent.json';
import AlignLeftIcon from '@components/AlignLeftIcon';
import type { BottomInputComponentButtonsProps } from '@constants/interfaces';

const ALIGN_BUTTONS_CLASSNAME =
  'group hover:bg-black/70 active:bg-black/70 focus:bg-black/70 rounded-full p-2 center-elements outline-none';

const ALIGN_ICONS_CLASSNAME =
  'size-10 fill-white group-hover:fill-title-purple group-active:fill-white group-focus:fill-title-purple shrink-0';

export default function BottomInputComponentButtons({
  onClick,
  isSubmitDisabled,
}: BottomInputComponentButtonsProps) {
  const t = useText();

  return (
    <div className='flex items-center justify-end w-full mt-2'>
      <div className='w-1/3 center-elements'>
        <button
          disabled={isSubmitDisabled}
          type='submit'
          className={`relative p-2 before:-z-10 before:size-full before:absolute before:hover:bg-black/70 before:active:bg-black/70 before:focus:bg-black/70 before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:rounded-full font-bebas-neue text-xl sm:text-3xl uppercase active:text-white outline-none ${
            !isSubmitDisabled
              ? 'hover:text-title-purple focus:text-title-purple'
              : 'text-white opacity-50 before:hidden cursor-not-allowed'
          }`}
        >
          {t('send', inputComponent)}
        </button>
      </div>
      <div className='w-1/3 gap-2 flex rtl:flex-row-reverse rtl:justify-start items-center justify-end'>
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
