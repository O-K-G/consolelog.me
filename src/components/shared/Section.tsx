'use client';

import { type SectionProps } from '@constants/interfaces';
import { useRef } from 'react';
import useHandleObserve from '@hooks/useHandleObserve';
import useScrollByPathName from '@hooks/useScrollByPathName';

const BACKGROUND_IMAGES_CLASSNAMES = {
  about: 'bg-about-background',
  contact: 'bg-contact-background',
  skills: 'bg-skills-background',
  projects: 'bg-projects-background',
  experience: 'bg-experience-background',
} as const;

export default function Section({
  className,
  children,
  currentSection,
  backgroundClassName,
  heightClassName = 'h-svh lg:h-dvh',
}: SectionProps) {
  const sectionRef = useRef(null);

  useScrollByPathName({ currentSection, sectionRef });
  useHandleObserve({ currentSection, sectionRef });

  const currentBackgroundImage =
    BACKGROUND_IMAGES_CLASSNAMES[currentSection] || '';

  return (
    <section
      ref={sectionRef}
      data-testid={`section-${currentSection}`}
      className={`min-h-screen relative pt-20 md:pt-40 px-4 pb-4 flex flex-col items-center w-full justify-start overflow-hidden bg-cover ${currentBackgroundImage} ${
        backgroundClassName ?? ''
      } ${heightClassName} ${className}`}
    >
      {children}
    </section>
  );
}
