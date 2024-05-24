'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  currentSection: 'about' | 'contact' | 'projects' | 'skills';
}

export default function Section({ children, currentSection }: SectionProps) {
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
      className='snap-start flex items-center justify-center border border-red-500 h-svh w-full overflow-hidden'
    >
      {children}
    </section>
  );
}
