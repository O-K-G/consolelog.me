'use client';

import { CACHE_VERSION } from '@root/tailwind.config';
import { useContext } from 'react';
import { AppContext as appContext } from '@components/AppContext';

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

  const planetImage = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/planet.webp?cacheVersion=${CACHE_VERSION}`}
      alt='planet with astronauts'
      loading='eager'
      className={`fixed translate-y-[60%] md:translate-y-[70%] bottom-0 left-0 right-0 mx-auto w-full md:w-3/4 transition-all duration-1000 ease-in-out ${
        rotationClasses || ''
      }`}
    />
  );

  return planetImage;
}
