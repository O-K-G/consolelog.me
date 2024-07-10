'use client';

import { type SectionProps } from '@constants/interfaces';
import { useRef } from 'react';
import useHandleObserve from '@hooks/useHandleObserve';
import useScrollByPathName from '@hooks/useScrollByPathName';
import { CACHE_VERSION } from '@root/tailwind.config';

const SUFFIX = `background.webp?cacheVersion=${CACHE_VERSION}`;

export default function Section({
  className,
  children,
  currentSection,
  heightClassName = 'h-svh lg:h-dvh',
  paddingClassName = 'pt-20 md:pt-40 px-4 pb-4',
}: SectionProps) {
  const sectionRef = useRef(null);
  const middleSectionRef = useRef(null);

  useScrollByPathName({ currentSection, sectionRef });
  useHandleObserve({ currentSection, middleSectionRef });

  return (
    <section
      ref={sectionRef}
      data-testid={`section-${currentSection}`}
      className={`min-h-screen relative flex flex-col items-center w-full justify-start overflow-hidden ${paddingClassName} ${heightClassName} ${
        className ?? ''
      }`}
    >
      <div
        ref={middleSectionRef}
        className='absolute top-0 bottom-0 left-0 my-auto size-0 opacity-0 overflow-hidden'
      />

      <div
        className='absolute top-0 left-0 min-h-full h-screen w-screen'
        style={{ clipPath: 'inset(0)' }}
      >
        <picture>
          <source
            srcSet={`${currentSection}-small-${SUFFIX}`}
            media='(max-width: 640px)'
          />
          <img
            className='bg-cover h-screen w-screen bottom-0 left-0 fixed'
            alt=''
            aria-hidden
            src={`${currentSection}-${SUFFIX}`}
          />
        </picture>
      </div>
      {children}
    </section>
  );
}
