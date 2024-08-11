'use client';

import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';
import ProgressIcon from '@components/contactForm/ProgressIcon';
import formValidation from '@utils/formValidation';

export default function ProgressIndicators({
  isMessageSent,
}: {
  isMessageSent: boolean;
}) {
  const { pending: isLoading, data } = useFormStatus(); // TODO: Experimental, revisit in the future.
  const t = useTranslations('inputComponentText');
  const { isValidated } = formValidation({
    email: data?.get('email') as string,
    subject: data?.get('subject') as string,
    content: data?.get('content') as string,
  });

  return (
    <div className='min-h-8 w-full relative'>
      <div className='sr-only' aria-live='assertive' role='status'>
        {isValidated && isLoading ? t('sendingMessage') : ''}
        {isMessageSent ? t('messageSent') : ''}
      </div>

      <ProgressIcon
        data-loading={isLoading}
        className='data-[loading=false]:opacity-0 data-[loading=false]:-z-10 data-[loading=true]:opacity-100 absolute top-0 bottom-0 left-0 rtl:right-0 my-auto transition-300 h-full rounded-full fill-white animate-spin'
      />

      <div
        data-sent={isMessageSent}
        aria-hidden
        className='data-[sent=false]:opacity-0 data-[sent=false]:-z-10 data-[sent=true]:opacity-100 absolute top-0 bottom-0 left-0 rtl:right-0 my-auto transition-300 uppercase text-white h-full flex items-center justify-start info-text-font-classNames text-lg md:text-2xl sm:text-3xl'
      >
        {t('messageSent')}
      </div>
    </div>
  );
}
