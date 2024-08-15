'use client';

import { CACHE_VERSION } from '@root/tailwind.config';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function Planet() {
  const t = useTranslations('planet');
  const planetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = planetRef.current as unknown as HTMLDivElement;
      const num =
        window.scrollY / (document.body.offsetHeight - window.innerHeight);

      el.style.setProperty('--scroll', num?.toString());
    };

    window.addEventListener('scroll', handleScroll, false);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='h-fit w-fit fixed right-0 left-0 bottom-0 translate-y-[65%] md:translate-y-[85%] center-elements mx-auto rounded-full'>
      <div
        ref={planetRef}
        className='size-full animate-rotate animate-paused animation-delay-[calc(var(--scroll)_*_-1s)] rotate center-elements transition-1000 before:absolute before:-z-10 before:size-full before:rounded-full before:blur-lg before:-translate-y-[5%] before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-[#00B1FF] before:to-transparent'
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
