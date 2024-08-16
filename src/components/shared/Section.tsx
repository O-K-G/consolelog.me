'use client';

import { type SectionProps } from '@constants/interfaces';
import SectionBackground from '@components/shared/SectionBackground';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Planet from '@components/shared/Planet';
import useHandleScrollAnimationTimelinePolyfill from '@hooks/useHandleScrollAnimationTimelinePolyfill';

export default function Section({
  className = 'relative min-h-screen h-svh lg:h-dvh pt-20 md:pt-40',
  children,
  currentSection,
}: SectionProps) {
  const pathname = usePathname();
  const sectionRef = useRef(null);

  useEffect(() => {
    const isScroll =
      ['skills', 'experience'].includes(currentSection as string) &&
      pathname.includes(currentSection as string);

    if (isScroll) {
      (sectionRef.current as unknown as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }, [currentSection, pathname]);

  /** In the future once Firefox and Safari fully support CSS' animation-timeline -
   * https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline ,
   * it should be better to use it rather than this useHandleScrollAnimationTimelinePolyfill hook.
   * Polyfill: 'useHandleScrollAnimationTimelinePolyfill' hook + 'animate-rotate-polyfill' + 'animate-background-polyfill' CSS classes.
   */

  useHandleScrollAnimationTimelinePolyfill({ ref: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={`bg-black flex flex-col items-center justify-start w-full overflow-hidden px-4 pb-4 ${
        className ?? ''
      }`}
    >
      <div className='absolute top-0 bottom-0 left-0 my-auto size-0 opacity-0 overflow-hidden' />
      <SectionBackground currentSection={currentSection} />
      {children}
      <Planet open={currentSection === 'experience'} />
    </section>
  );
}
