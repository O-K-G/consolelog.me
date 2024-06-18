'use client';

import { AppContext as appContext } from '@components/shared/AppContext';
import { type SectionProps } from '@constants/interfaces';
import { useContext, useRef } from 'react';
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
}: SectionProps) {
  const sectionRef = useRef(null);
  const { currentTopSection } = useContext(appContext);

  useScrollByPathName({ currentSection, sectionRef });
  useHandleObserve({ currentSection, sectionRef });

  const currentBackgroundImage =
    BACKGROUND_IMAGES_CLASSNAMES[currentSection] || '';

  return (
    <section
      ref={sectionRef}
      data-testid={`section-${currentSection}`}
      aria-hidden={currentSection !== currentTopSection}
      className={`relative p-4 flex flex-col items-center w-full justify-start overflow-hidden bg-cover ${currentBackgroundImage} ${
        backgroundClassName ?? ''
      } ${className}`}
    >
      {children}
    </section>
  );
}
