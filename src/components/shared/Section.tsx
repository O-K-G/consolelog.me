'use client';

import { type SectionProps } from '@constants/interfaces';
import { useRef } from 'react';
import useHandleObserve from '@hooks/useHandleObserve';
import SectionBackground from '@components/shared/SectionBackground';

export default function Section({
  className,
  children,
  currentSection,
  heightClassName = 'h-svh lg:h-dvh',
  paddingClassName = 'pt-20 md:pt-40 px-4 pb-4',
}: SectionProps) {
  const middleSectionRef = useRef(null);

  useHandleObserve({ currentSection, middleSectionRef });

  return (
    <section
      data-testid={currentSection ? `section-${currentSection}` : null}
      className={`min-h-screen bg-black relative flex flex-col items-center w-full justify-start overflow-hidden ${paddingClassName} ${heightClassName} ${
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
