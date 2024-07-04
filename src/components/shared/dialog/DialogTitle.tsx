import IconButton from '@components/shared/IconButton';
import CloseIcon from '@components/icons/CloseIcon';
import { type MouseEventHandler } from 'react';
import { useText } from '@hooks/useText';
import dialogComponentText from '@i18nEn/dialogComponentText.json';

export default function DialogTitle({
  label,
  onClick,
}: {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const t = useText();

  return (
    <div className='w-full flex items-center justify-end'>
      <h2 className='min-w-[33.333333%] h-full center-elements'>{label}</h2>
      <div className='w-1/3 flex items-center justify-end'>
        <IconButton
          aria-label={t('close', dialogComponentText)}
          onClick={onClick}
          className='h-14 rounded-lg'
          icon={
            <CloseIcon className='h-full fill-white group-hover:fill-title-purple group-active:fill-[#75629f] group-focus:fill-title-purple stroke-white group-hover:stroke-title-purple group-active:stroke-[#75629f] group-focus:stroke-title-purple' />
          }
        />
      </div>
    </div>
  );
}
