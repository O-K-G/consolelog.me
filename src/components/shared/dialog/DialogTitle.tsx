import IconButton from '@components/shared/IconButton';
import CloseIcon from '@components/icons/CloseIcon';
import { useText } from '@hooks/useText';
import dialogComponentText from '@i18nEn/dialogComponentText.json';
import type { DialogTitleProps } from '@constants/interfaces';

export default function DialogTitle({
  label,
  onClick,
  className,
  closeButtonIcon = (
    <CloseIcon className='h-full fill-white group-hover:fill-title-purple group-active:fill-[#75629f] group-focus:fill-title-purple stroke-white group-hover:stroke-title-purple group-active:stroke-[#75629f] group-focus:stroke-title-purple' />
  ),
}: DialogTitleProps) {
  const t = useText();

  return (
    <div className={`w-full flex items-center justify-end ${className}`}>
      <h2 className='min-w-[33.333333%] h-full center-elements'>{label}</h2>
      <div className='w-1/3 flex items-center justify-end'>
        <IconButton
          aria-label={t('close', dialogComponentText)}
          onClick={onClick}
          className='h-14 rounded-lg'
          icon={closeButtonIcon}
        />
      </div>
    </div>
  );
}
