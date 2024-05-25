'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import Image from 'next/image';
import useVpSize from '@hooks/useVpSize';

interface ImageComponentProps {
  currentSection: 'about' | 'contact' | 'projects' | 'skills' | 'experience';
  backgroundClassName?: string;
}

interface SectionProps extends ImageComponentProps {
  children: ReactNode;
}

function ImageComponent({
  currentSection,
  backgroundClassName,
}: ImageComponentProps) {
  const { isTailwindMobile } = useVpSize();
  const [fileType, setFileType] = useState<null | 'svg' | 'jpg'>(null);

  /** It was found in early tests that multiple SVG files as background images,
   * cause problems when scrolling in Android browsers.
   * Switching to JPG files in mobile resolutions solves the problem. */

  useEffect(() => {
    if (!fileType) {
      if (isTailwindMobile) {
        return setFileType('jpg');
      }
      return setFileType('svg');
    }
  }, [currentSection, isTailwindMobile, fileType]);

  if (fileType) {
    return (
      <Image
        src={`/${currentSection}-background.${fileType}`}
        fill
        alt={`${currentSection} background`}
        className={`-z-10 absolute top-0 left-0 object-cover ${
          backgroundClassName ?? 'object-center'
        }`}
      />
    );
  }
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
      <ImageComponent
        currentSection={currentSection}
        backgroundClassName={backgroundClassName}
      />
      {children}
    </section>
  );
}
