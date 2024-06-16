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
        className={`transition-300 h-full rounded-full shrink-0 fill-white animate-spin ${
          !isLoading ? 'opacity-0 absolute top-0 left-0 -z-10' : 'opacity-100'
        }`}
      />
      {isMessageSent && (
        <div className='text-white font-bebas-neue text-lg md:text-2xl sm:text-3xl'>
          {t('messageSent', inputComponentText as object)}
        </div>
      )}
    </>
  );
}
