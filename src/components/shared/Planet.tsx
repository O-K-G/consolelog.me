'use client';

import { CACHE_VERSION } from '@root/tailwind.config';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import useHandleScrollAnimationTimelinePolyfill from '@hooks/useHandleScrollAnimationTimelinePolyfill';

export default function Planet() {
  const t = useTranslations('planet');
  const ref = useRef(null);

  /** In the future once Firefox and Safari fully support CSS' animation-timeline -
   * https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline ,
   * it should be better to use it rather than this useHandleScrollAnimationTimelinePolyfill hook.
   * Polyfill: 'useHandleScrollAnimationTimelinePolyfill' hook + 'animate-rotate-polyfill' CSS class.
   */

  useHandleScrollAnimationTimelinePolyfill({ ref });

  return (
    <div className='h-fit w-fit fixed right-0 left-0 bottom-0 translate-y-[65%] md:translate-y-[85%] center-elements mx-auto rounded-full'>
      <div
        ref={ref}
        className='size-full animate-rotate animate-rotate-polyfill center-elements before:absolute before:-z-10 before:size-full before:rounded-full before:blur-lg before:-translate-y-[5%] before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-[#00B1FF] before:to-transparent'
      >
        <img
          className='rounded-full max-h-[50svh] sm:max-h-[80svh] md:max-h-[100svh] lg:max-h-none lg:max-w-[70dvw] xl:max-w-[70dvw] 2xl:w-[100dvw]'
          alt={t('alt')}
          src={`/images/planet.webp?cacheVersion=${CACHE_VERSION}`}
        />
      </div>
    </div>
  );
}
