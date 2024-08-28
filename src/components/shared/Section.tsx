'use client';

import type { SectionProps } from '@constants/interfaces';
import SectionBackground from '@components/shared/SectionBackground';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

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

  return (
    <section
      ref={sectionRef}
      className={`bg-black min-h-screen flex flex-col items-center justify-start w-full overflow-hidden px-4 pb-4 ${
        className ?? ''
      }`}
    >
      <div className='absolute top-0 bottom-0 left-0 my-auto size-0 opacity-0 overflow-hidden' />
      <SectionBackground currentSection={currentSection} />
      {children}
    </section>
  );
}
