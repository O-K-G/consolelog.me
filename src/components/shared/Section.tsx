'use client';

import { AppContext as appContext } from '@components/shared/AppContext';
import { type SectionProps } from '@constants/interfaces';
import { usePathname } from 'next/navigation';
import { type MutableRefObject, useContext, useEffect, useRef } from 'react';
import { useScroll } from '@hooks/useScroll';

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
  const pathname = usePathname();
  const sectionRef = useRef(null);
  const handleScroll = useScroll();
  const {
    currentTopSection,
    onChange: setCurrentTopSection,
    contactSectionRef,
  } = useContext(appContext);

  useEffect(() => {
    if (
      currentSection === 'contact' &&
      sectionRef.current &&
      !contactSectionRef.current
    ) {
      (contactSectionRef.current as unknown as MutableRefObject<null>) =
        sectionRef;
    }

    if (currentSection === pathname?.substring(1)) {
      handleScroll({ sectionRef });
    }
  }, [contactSectionRef, currentSection, handleScroll, pathname]);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0,
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
