'use client';

import { type SectionProps } from '@constants/interfaces';
import SectionBackground from '@components/shared/SectionBackground';

export default function Section({
  className = 'relative min-h-screen h-svh lg:h-dvh pt-20 md:pt-40',
  children,
  currentSection,
}: SectionProps) {
  return (
    <section
      className={`bg-black flex flex-col items-center justify-start w-full overflow-hidden px-4 pb-4 ${
        className ?? ''
      }`}
    >
      <div className='absolute top-0 bottom-0 left-0 my-auto size-0 opacity-0 overflow-hidden' />
      <SectionBackground currentSection={currentSection} />
      {children}
    </section>
  );
}
