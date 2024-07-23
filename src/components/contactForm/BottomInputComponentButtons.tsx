import { useText } from '@hooks/useText';
import inputComponentText from '@i18nEn/inputComponentText.json';
import AlignLeftIcon from '@components/contactForm/AlignLeftIcon';
import type { BottomInputComponentButtonsProps } from '@constants/interfaces';
import { useFormStatus } from 'react-dom';

export default function BottomInputComponentButtons({
  dir,
  onClick,
  isSubmitDisabled,
  leftSlot,
  onSubmit,
}: BottomInputComponentButtonsProps) {
  const { pending: isLoading } = useFormStatus(); // TODO: Experimental, revisit in the future.
  const isBusy = isLoading ?? isSubmitDisabled;
  const t = useText();
  const isLTR = dir === 'ltr';

  return (
    <div className='flex items-center justify-end w-full mt-2 overflow-hidden'>
      <div className='relative overflow-hidden w-1/3 h-full flex items-center justify-start'>
        {leftSlot}
      </div>
      <div className='w-1/3 overflow-hidden center-elements'>
        <button
          disabled={isBusy}
          type='submit'
          onClick={onSubmit}
          className={`relative h-full p-2 before:-z-10 before:size-full before:absolute before:hover:bg-black/70 before:active:bg-black/70 before:focus:bg-black/70 before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:rounded-full font-bebas-neue text-xl sm:text-3xl uppercase active:text-white outline-none ${
            isBusy
              ? 'text-white opacity-50 before:hidden cursor-not-allowed'
              : 'hover:text-title-purple focus:text-title-purple'
          }`}
        >
          {t('send', inputComponentText as object)}
        </button>
      </div>
      <div className='w-1/3 overflow-hidden flex items-center justify-end'>
        <button
          aria-label={`${t('alignFormText', inputComponentText)} ${t(
            isLTR ? 'right' : 'left',
            inputComponentText
          )}`}
          onClick={() => onClick?.(isLTR ? 'rtl' : 'ltr')}
          type='button'
          className='group size-8 shrink-0 hover:bg-black/70 active:bg-black/70 focus:bg-black/70 rounded-full center-elements outline-none'
        >
          <AlignLeftIcon
            className={`size-full rounded-full fill-white group-hover:fill-title-purple group-active:fill-white group-focus:fill-title-purple ${
              isLTR ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>
    </div>
  );
}
