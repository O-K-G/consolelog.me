'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';

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

  const backgroundImage = {
    about: 'bg-about-background',
    contact: 'bg-contact-background',
    skills: 'bg-skills-background',
    projects: 'bg-projects-background',
    experience: 'bg-experience-background',
  };

  const currentBackgroundImage = backgroundImage[currentSection] || '';

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center justify-center h-svh w-full overflow-hidden bg-cover ${currentBackgroundImage} ${backgroundClassName}`}
    >
      {children}
    </section>
  );
}
