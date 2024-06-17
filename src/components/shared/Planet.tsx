'use client';

import { CACHE_VERSION } from '@root/tailwind.config';
import { useContext } from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';
import Image from 'next/image';

const ROTATION_CLASSNAMES_BY_SECTION = {
  contact: 'rotate-90',
  projects: 'rotate-180',
  skills: '-rotate-90',
  experience: '-rotate-180',
} as const;

export default function Planet() {
  const { currentTopSection } = useContext(appContext);

  const rotationClasses =
    ROTATION_CLASSNAMES_BY_SECTION[
      currentTopSection as keyof typeof ROTATION_CLASSNAMES_BY_SECTION
    ];

  return (
    <div
      className={`before:-translate-y-[5%] before:blur-lg before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-[#00B1FF] before:to-transparent before:block before:size-[98%] before:rounded-full rounded-full fixed translate-y-[60%] md:translate-y-[70%] bottom-0 left-0 right-0 mx-auto size-[40svh] max-h-[75svw] max-w-[75svw] md:size-[75dvh] md:max-h-[75dvw] md:max-w-[75dvw] transition-1000 ${
        rotationClasses || ''
      }`}
    >
      <Image
        data-testid='planet-test'
        src={`/planet.webp?cacheVersion=${CACHE_VERSION}`}
        fill
        sizes='(max-width: 768px) 50svw, (min-width: 768) 75dvw'
        loading='eager'
        alt='planet with astronauts'
        aria-hidden
        priority
        className='rounded-full overflow-hidden'
      />
    </div>
  );
}
