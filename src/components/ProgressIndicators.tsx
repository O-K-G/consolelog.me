'use client';

import { useText } from '@hooks/useText';
import { useFormStatus } from 'react-dom';
import ProgressIcon from '@components/ProgressIcon';
import inputComponentText from '@i18nEn/inputComponentText.json';
import type { FormErrorNames } from '@constants/interfaces';

const INVISIBLE_CLASSNAME = 'opacity-0 absolute top-0 left-0 -z-10';

export default function ProgressIndicators({
  isMessageSent,
  isError,
}: {
  isMessageSent: boolean;
  isError: [] | FormErrorNames;
}) {
  const { pending: isLoading } = useFormStatus(); // TODO: Experimental, revisit in the future.
  const t = useText();

  return (
    <>
      <div className='sr-only' aria-live='assertive' role='status'>
        {!isError.length && isLoading
          ? t('sendingMessage', inputComponentText)
          : ''}
        {isMessageSent ? t('messageSent', inputComponentText) : ''}
      </div>

      <ProgressIcon
        className={`relative transition-300 h-full rounded-full fill-white animate-spin ${
          !isLoading ? INVISIBLE_CLASSNAME : 'opacity-100'
        }`}
      />

      <div
        aria-hidden
        className={`transition-300 uppercase text-white h-full flex items-center justify-start font-bebas-neue text-lg md:text-2xl sm:text-3xl ${
          !isMessageSent ? INVISIBLE_CLASSNAME : 'opacity-100'
        }`}
      >
        {t('messageSent', inputComponentText)}
      </div>
    </>
  );
}
