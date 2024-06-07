'use client';

import { AppContext as appContext } from '@components/AppContext';
import { type SectionProps } from '@constants/interfaces';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useRef } from 'react';

const BACKGROUND_IMAGES_CLASSNAMES = {
  about: 'bg-about-background',
  contact: 'bg-contact-background',
  skills: 'bg-skills-background',
  projects: 'bg-projects-background',
  experience: 'bg-experience-background',
} as const;

export default function Section({
  children,
  currentSection,
  backgroundClassName,
}: SectionProps) {
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const { onChange: setCurrentTopSection } = useContext(appContext);

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

  useEffect(() => {
    const options = {
      rootMargin: '10px',
      threshold: 1.0,
    };

    const handleObserve = (e: IntersectionObserverEntry[]) => {
      const { isIntersecting } = e[0];

      if (isIntersecting) {
        setCurrentTopSection(currentSection);
      }
    };

    const observer = new IntersectionObserver(handleObserve, options);

    observer.observe(sectionRef.current as unknown as HTMLElement);

    return () => observer.disconnect();
  }, [currentSection, setCurrentTopSection]);

  const currentBackgroundImage =
    BACKGROUND_IMAGES_CLASSNAMES[currentSection] || '';

  return (
    <section
      ref={sectionRef}
      className={`relative p-8 flex flex-col gap-24 lg:gap-16 items-center justify-start h-svh w-full overflow-hidden bg-cover ${currentBackgroundImage} ${
        backgroundClassName ?? ''
      }`}
    >
      {children}
    </section>
  );
}
