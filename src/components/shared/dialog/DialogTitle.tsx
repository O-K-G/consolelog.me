import IconButton from '@components/shared/IconButton';
import CloseIcon from '@components/icons/CloseIcon';
import { useTranslations } from 'next-intl';
import { DialogTitleProps } from '@constants/interfaces';

export default function DialogTitle({
  label,
  onClick,
  className = '',
  closeButtonIcon = (
    <CloseIcon className="h-full fill-white group-hover:fill-title-purple group-active:fill-title-purple-dark group-focus:fill-title-purple stroke-white group-hover:stroke-title-purple group-active:stroke-title-purple-dark group-focus:stroke-title-purple" />
  ),
}: DialogTitleProps) {
  const t = useTranslations('dialogComponentText');

  return (
    <div className={`w-full flex items-center justify-end ${className}`}>
      <h2 className="min-w-[33.333333%] h-full center-elements">{label}</h2>
      <div className="w-1/3 flex items-center justify-end">
        <IconButton
          aria-label={t('close')}
          onClick={onClick}
          className="h-14 rounded-lg"
          icon={closeButtonIcon}
        />
      </div>
    </div>
  );
}
