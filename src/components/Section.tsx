'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import useVpSize from '@hooks/useVpSize';

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

  const { isTailwindMobile } = useVpSize();
  const [fileType, setFileType] = useState<null | 'svg' | 'webp'>(null);

  /** Ensures that large screens will get the SVG backgrounds and not the WEBP ones,
   *  event if they're more resource intensive.
   *  The screen size check is done only initially, changing the screen size
   *  will not cause the other file types to download, as it's a redundant network use
   *  for most cases.
   */

  // useEffect(() => {
  //   if (!fileType) {
  //     if (isTailwindMobile) {
  //       return setFileType('webp');
  //     }
  //     return setFileType('svg');
  //   }
  // }, [currentSection, isTailwindMobile, fileType]);

  const backgroundImage = {
    about: 'bg-about-background-webp',
    contact: 'bg-contact-background-webp',
    skills: 'bg-skills-background-webp',
    projects: 'bg-projects-background-webp',
    experience: 'bg-experience-background-webp',
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
