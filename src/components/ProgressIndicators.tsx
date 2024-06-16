'use client';

import { useText } from '@hooks/useText';
import { useFormStatus } from 'react-dom';
import ProgressIcon from '@components/ProgressIcon';
import inputComponentText from '@i18nEn/inputComponentText.json';

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
        className={`transition-300 h-full rounded-full shrink-0 fill-white ${
          !isMessageSent &&
          (!isLoading
            ? 'opacity-0 absolute top-0 left-0 -z-10'
            : 'opacity-100 animate-spin')
        }`}
      />
      {true && (
        <div
          className={`text-white h-full flex items-center justify-start font-bebas-neue text-lg md:text-2xl sm:text-3xl ${
            !isLoading &&
            (!isMessageSent
              ? 'opacity-0 absolute top-0 left-0 -z-10'
              : 'opacity-100')
          }`}
        >
          {t('messageSent', inputComponentText as object)}
        </div>
      )}
    </>
  );
}
