'use client';

import { useText } from '@hooks/useText';
import { useFormStatus } from 'react-dom';
import ProgressIcon from '@components/contactForm/ProgressIcon';
import inputComponentText from '@i18nEn/inputComponentText.json';
import formValidation from '@utils/formValidation';

export default function ProgressIndicators({
  isMessageSent,
}: {
  isMessageSent: boolean;
}) {
  const { pending: isLoading, data } = useFormStatus(); // TODO: Experimental, revisit in the future.
  const t = useText();
  const { isValidated } = formValidation({
    email: data?.get('email') as string,
    subject: data?.get('subject') as string,
    content: data?.get('content') as string,
  });

  return (
    <div className='size-full relative'>
      <div className='sr-only' aria-live='assertive' role='status'>
        {isValidated && isLoading
          ? t('sendingMessage', inputComponentText)
          : ''}
        {isMessageSent ? t('messageSent', inputComponentText) : ''}
      </div>

      <ProgressIcon
        className={`absolute top-0 bottom-0 left-0 my-auto transition-300 h-full rounded-full fill-white animate-spin ${
          !isLoading ? 'opacity-0 -z-10' : 'opacity-100'
        }`}
      />

      <div
        aria-hidden
        className={`absolute top-0 bottom-0 left-0 my-auto transition-300 uppercase text-white h-full flex items-center justify-start font-bebas-neue text-lg md:text-2xl sm:text-3xl ${
          !isMessageSent ? 'opacity-0 -z-10' : 'opacity-100'
        }`}
      >
        {t('messageSent', inputComponentText)}
      </div>
    </div>
  );
}
