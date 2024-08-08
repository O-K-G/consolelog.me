'use client';

import Loader from '@components/shared/Loader';
import { useEffect } from 'react';
import ProgressIcon from '@components/contactForm/ProgressIcon';
import IconButton from '@components/shared/IconButton';
import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Loader
      open
      label={t('label')}
      loaderTextAdditionalSlot={
        <div
          role='alert'
          aria-label={t('label')}
          className='w-full center-elements flex-col gap-4 mt-4'
        >
          <IconButton
            onClick={reset}
            className='size-24 border border-white rounded-lg'
            aria-label={t('ariaLabel')}
            icon={
              <ProgressIcon className='size-full animate-spin fill-title-purple group-hover:fill-[#75629f] group-active:fill-white group-focus:fill-red-300 stroke-title-purple group-hover:stroke-[#75629f] group-active:stroke-white group-focus:stroke-red-300' />
            }
          />
          <h2 aria-hidden className='font-bebas-neue text-center text-3xl'>
            {t('subtitle')}
          </h2>
        </div>
      }
    />
  );
}
