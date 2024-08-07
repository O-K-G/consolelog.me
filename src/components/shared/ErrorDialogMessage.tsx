import { useTranslations } from 'next-intl';
import { useContext } from 'react';
import { ModalContext as modalContext } from '@components/shared/ModalContext';
import DialogTitle from '@components/shared/dialog/DialogTitle';

const DATA_TEST_ID = 'error-details-test';

export default function ErrorDialogMeesage({ details }: { details: string }) {
  const { onCloseModal } = useContext(modalContext);
  const t = useTranslations('errorDialog');

  return (
    <div className='w-full h-1/2 lg:cursor-default sm:w-[50svw] sm:h-[50svw] md:w-[40dvw] md:h-[40dvw] bg-black text-white p-4 break-words text-base md:text-xl lg:text-2xl flex items-center justify-start flex-col overflow-hidden'>
      <DialogTitle label={t('error')} onClick={onCloseModal} />
      <p
        role='alert'
        className='regular-text-font-by-locale pb-4 w-full h-1/2 flex items-start lg:items-center justify-start text-center overflow-auto'
      >
        {t('errorMessage')}
      </p>

      <p
        data-testid={DATA_TEST_ID}
        className={`w-full h-1/2 flex overflow-auto border-t pt-4 border-white ${
          details
            ? 'items-start justify-start '
            : 'items-center justify-center '
        }`}
      >
        {t('errorDetails')}&nbsp;
        {details || t('noErrorDetailsFound')}
      </p>
    </div>
  );
}
