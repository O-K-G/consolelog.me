'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';

interface SectionProps {
  children: ReactNode;
  currentSection: 'about' | 'contact' | 'projects' | 'skills' | 'experience';
  backgroundClassName?: string;
}

export default function Section({
  children,
  currentSection,
  backgroundClassName,
}: SectionProps) {
  const pathname = usePathname();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (currentSection === pathname?.substring(1)) {
      const { current: sectionElement } = sectionRef;
      const scrollBehavior = {
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      } as const;

      (sectionElement as unknown as HTMLElement)?.scrollIntoView(
        scrollBehavior
      );
    }
  }, [currentSection, pathname]);

  return (
    <section
      ref={sectionRef}
      className='relative snap-start flex items-center justify-center h-svh w-full overflow-hidden'
    >
      <Image
        src={`/${currentSection}-background.svg`}
        fill
        alt={`${currentSection} background`}
        className={`-z-10 absolute top-0 left-0 object-cover ${
          backgroundClassName ?? 'object-center'
        }`}
      />
      {children}
    </section>
  );
}
