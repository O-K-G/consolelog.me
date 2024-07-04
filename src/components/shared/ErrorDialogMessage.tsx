import { useText } from '@hooks/useText';
import errorDialog from '@i18nEn/errorDialog.json';
import { useContext } from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';
import IconButton from '@components/shared/IconButton';
import CloseIcon from '@components/icons/CloseIcon';

const DATA_TEST_ID = 'error-details-test';

export default function ErrorDialogMeesage({ details }: { details: string }) {
  const { onCloseModal } = useContext(appContext);
  const t = useText();
  const ARIA_LABEL = 'Close';

  return (
    <div className='w-full h-1/2 cursor-default sm:w-[50svw] sm:h-[50svw] bg-black text-white p-4 break-words text-base md:text-xl lg:text-2xl flex items-center justify-start flex-col overflow-hidden'>
      <div className='w-full border border-red-500 flex items-center justify-end'>
        <div className='w-1/3 flex items-center justify-end border border-blue-500'>
          <IconButton
            aria-label={ARIA_LABEL}
            onClick={onCloseModal}
            className='h-14 fill-white border border-white rounded-lg'
            icon={<CloseIcon className='h-full' />}
          />
        </div>
      </div>
      <p
        role='alert'
        className='font-montserrat pb-4 w-full h-1/2 flex items-start lg:items-center justify-start text-center overflow-auto'
      >
        {t('errorMessage', errorDialog)}
      </p>

      <p
        data-testid={DATA_TEST_ID}
        className={`w-full h-1/2 flex overflow-auto border-t pt-4 border-white ${
          details
            ? 'items-start justify-start '
            : 'items-center justify-center '
        }`}
      >
        {t('errorDetails', errorDialog)}&nbsp;
        {details || t('noErrorDetailsFound', errorDialog)}
      </p>
    </div>
  );
}
