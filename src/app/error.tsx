'use client';

import Loader from '@components/Loader';
import { useEffect } from 'react';
import ProgressIcon from '@components/contactForm/ProgressIcon';
import IconButton from '@components/shared/IconButton';

const LABEL = 'Oops! Something just broke somewhere...';
const ARIA_LABEL = 'Click to try and refresh';
const SUBTITLE = 'Click the button to try and refresh';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Loader
      open
      label={LABEL}
      loadingTextAdditionalSlot={
        <div
          role='alert'
          aria-label={LABEL}
          className='w-full center-elements flex-col gap-4 mt-4'
        >
          <IconButton
            onClick={reset}
            className='size-24 border border-white rounded-lg'
            aria-label={ARIA_LABEL}
            icon={
              <ProgressIcon className='size-full animate-spin fill-title-purple group-hover:fill-[#75629f] group-active:fill-white group-focus:fill-red-300 stroke-title-purple group-hover:stroke-[#75629f] group-active:stroke-white group-focus:stroke-red-300' />
            }
          />
          <h2 aria-hidden className='font-bebas-neue text-3xl text-center'>
            {SUBTITLE}
          </h2>
        </div>
      }
    />
  );
}
