'use client';

import { useText } from '@hooks/useText';
import { useFormStatus } from 'react-dom';
import ProgressIcon from '@components/ProgressIcon';
import inputComponentText from '@i18nEn/inputComponentText.json';

const INVISIBLE_CLASSNAME = 'opacity-0 absolute top-0 left-0 -z-10';

export default function ProgressIndicators({
  isMessageSent,
}: {
  isMessageSent: boolean;
}) {
  const { pending: isLoading } = useFormStatus(); // TODO: Experimental, revisit in the future.
  const t = useText();

  return (
    <>
      <ProgressIcon
        className={`transition-300 h-full rounded-full fill-white animate-spin ${
          !(isLoading && !isMessageSent) ? INVISIBLE_CLASSNAME : 'opacity-100'
        }`}
      />
      <div
        className={`transition-300 uppercase text-white h-full flex items-center justify-start font-bebas-neue text-lg md:text-2xl sm:text-3xl ${
          !(!isLoading && isMessageSent) ? INVISIBLE_CLASSNAME : 'opacity-100'
        }`}
      >
        {t('messageSent', inputComponentText as object)}
      </div>
    </>
  );
}
