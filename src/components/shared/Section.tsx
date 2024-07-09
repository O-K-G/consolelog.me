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
  heightClassName = 'h-svh lg:h-dvh',
  paddingClassName = 'pt-20 md:pt-40 px-4 pb-4',
}: SectionProps) {
  const sectionRef = useRef(null);
  const middleSectionRef = useRef(null);

  useScrollByPathName({ currentSection, sectionRef });
  useHandleObserve({ currentSection, middleSectionRef });

  const currentBackgroundImage =
    BACKGROUND_IMAGES_CLASSNAMES[currentSection] || '';

  return (
    <section
      ref={sectionRef}
      data-testid={`section-${currentSection}`}
      className={`min-h-screen relative flex flex-col items-center w-full justify-start overflow-hidden bg-fixed ${currentBackgroundImage} ${paddingClassName} ${heightClassName} ${
        className ?? ''
      }`}
    >
      <div
        ref={middleSectionRef}
        className='absolute top-0 bottom-0 left-0 my-auto size-0 opacity-0 overflow-hidden'
      />
      {children}
    </section>
  );
}
