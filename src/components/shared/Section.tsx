'use client';

import { type SectionProps } from '@constants/interfaces';
import { useRef } from 'react';
import useHandleObserve from '@hooks/useHandleObserve';
import SectionBackground from '@components/shared/SectionBackground';

export default function Section({
  className = 'relative min-h-screen h-svh lg:h-dvh',
  children,
  currentSection,
}: SectionProps) {
  const middleSectionRef = useRef(null);

  useHandleObserve({ currentSection, middleSectionRef });

  return (
    <section
      data-testid={currentSection ? `section-${currentSection}` : null}
      className={`bg-black flex flex-col items-center w-full justify-start overflow-hidden pt-20 md:pt-40 px-4 pb-4 ${
        className ?? ''
      }`}
    >
      <div
        ref={middleSectionRef}
        className='absolute top-0 bottom-0 left-0 my-auto size-0 opacity-0 overflow-hidden'
      />
      <SectionBackground currentSection={currentSection} />
      {children}
    </section>
  );
}
