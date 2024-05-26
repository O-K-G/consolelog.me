'use client';

import { AppContext as appContext } from '@components/AppContext';
import { type SectionProps } from '@constants/interfaces';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useRef } from 'react';
import { CACHE_VERSION } from '@root/tailwind.config';

const BACKGROUND_IMAGES_CLASSNAMES = {
  about: 'bg-about-background',
  contact: 'bg-contact-background',
  skills: 'bg-skills-background',
  projects: 'bg-projects-background',
  experience: 'bg-experience-background',
} as const;

const ROTATION_CLASSNAMES_BY_SECTION = {
  contact: 'rotate-90',
  projects: 'rotate-180',
  skills: '-rotate-90',
  experience: '-rotate-180',
} as const;

export default function Section({
  children,
  currentSection,
  backgroundClassName,
  displayPlanetImage,
}: SectionProps) {
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const { onChange: setCurrentTopSection, currentTopSection } =
    useContext(appContext);

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

  const rotationClasses =
    ROTATION_CLASSNAMES_BY_SECTION[
      currentTopSection as keyof typeof ROTATION_CLASSNAMES_BY_SECTION
    ];

  const planetImage = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/planet.svg?cacheVersion=${CACHE_VERSION}`}
      alt='planet with astronauts'
      loading='eager'
      className={`fixed z-10 translate-y-[60%] md:translate-y-[70%] bottom-0 left-0 right-0 mx-auto w-full md:w-3/4 transition-all duration-1000 ease-in-out md:ease-in ${
        rotationClasses || ''
      }`}
    />
  );

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center justify-center h-svh w-full overflow-hidden bg-cover ${currentBackgroundImage} ${
        backgroundClassName ?? ''
      }`}
    >
      {displayPlanetImage && planetImage}
      {children}
    </section>
  );
}
