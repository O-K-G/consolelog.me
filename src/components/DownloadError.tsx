import { useContext } from 'react';
import { ModalContext as modalContext } from '@components/shared/ModalContext';
import { useTranslations } from 'next-intl';
import DialogTitle from '@components/shared/dialog/DialogTitle';

export function DownloadError() {
  const { onCloseModal } = useContext(modalContext);
  const t = useTranslations('cv');

  return (
    <div
      dir='ltr'
      className='flex flex-col justify-start items-center min-w-[100svw] max-w-[100svw] sm:min-w-[50svw] sm:max-w-[50svw] md:min-w-[20dvw] md:min-h-[20dvw] lg:min-w-[10dvw] lg:min-h-[10dvw] bg-black text-white p-4 lg:cursor-default'
    >
      <DialogTitle
        className='text-xl'
        label={t('errorTitle')}
        onClick={onCloseModal}
      />
      <p className='size-full break-words font-montserrat text-base sm:text-lg md:text-xl'>
        {t('error')}
      </p>
    </div>
  );
}
