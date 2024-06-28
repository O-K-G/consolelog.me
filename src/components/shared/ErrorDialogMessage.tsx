import { useText } from '@hooks/useText';
import errorDialog from '@i18nEn/errorDialog.json';

const DATA_TEST_ID = 'error-details-test';

export default function ErrorDialogMeesage({ details }: { details: string }) {
  const t = useText();

  return (
    <div className='w-full break-words text-base md:text-xl lg:text-2xl h-[90%] flex items-center justify-start flex-col overflow-hidden'>
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
