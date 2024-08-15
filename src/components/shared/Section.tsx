'use client';

import { type SectionProps } from '@constants/interfaces';
import { useRef, useContext } from 'react';
import useHandleObserve from '@hooks/useHandleObserve';
import SectionBackground from '@components/shared/SectionBackground';
import { AppContext as appContext } from '@components/shared/AppContext';

export default function Section({
  className = 'relative min-h-screen h-svh lg:h-dvh pt-20 md:pt-40',
  children,
  currentSection,
}: SectionProps) {
  const topSectionRef = useRef(null);
  const middleSectionRef = useRef(null);
  const { topSectionRefs } = useContext(appContext);
  // useHandleObserve({ currentSection, middleSectionRef });
  const { current } = topSectionRefs ?? {};
  const isTopSectionRefInContext =
    current[currentSection as keyof typeof current];

  if (!isTopSectionRefInContext) {
    topSectionRefs.current = {
      ...topSectionRefs.current,
      [currentSection as string]: topSectionRef,
    };
  }

  return (
    <section
      ref={topSectionRef}
      data-testid={currentSection ? `section-${currentSection}` : null}
      className={`bg-black flex flex-col items-center justify-start w-full overflow-hidden px-4 pb-4 ${
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
