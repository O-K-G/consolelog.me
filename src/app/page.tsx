'use client';

import About from '@components/About';
import Contact from '@components/Contact';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import { CACHE_VERSION } from '@root/tailwind.config';
import { useMemo, useState } from 'react';
import { AppContext } from '@components/AppContext';

const ROTATION_CLASSNAMES_BY_SECTION = {
  contact: 'rotate-90',
  projects: 'rotate-180',
  skills: '-rotate-90',
  experience: '-rotate-180',
} as const;

export default function Home() {
  const [currentTopSection, setCurrentTopSection] = useState('about');

  const AppContextData = useMemo(
    () => ({
      onChange: setCurrentTopSection,
    }),
    []
  );

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
      className={`fixed translate-y-[60%] md:translate-y-[70%] bottom-0 left-0 right-0 mx-auto w-full md:w-3/4 transition-all duration-300 ease-in-out md:ease-in ${
        rotationClasses || ''
      }`}
    />
  );

  return (
    <main className='min-h-screen overflow-hidden'>
      <div className='fixed top-0 left-0 text-xs text-white z-10'>
        TODO: Move this attribution elsewhere. Design based on Jayendra
        Awasthi&apos;s &apos;Space themed portfolio&apos; free community Figma
        template at&nbsp;
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.figma.com/community/file/1192903581929005722'
        >
          https://www.figma.com/community/file/1192903581929005722
        </a>
        and used under the&nbsp;
        <a
          target='_blank'
          rel='noreferrer'
          href='https://creativecommons.org/licenses/by/4.0/'
        >
          CC BY 4.0
        </a>
        &nbsp; license. Changes where made to the material from the original
        version.
      </div>
      <AppContext.Provider value={AppContextData}>
        <About />
        <Contact />
        <Projects />
        <Skills />
        <Experience />
        {/* FIXME: Planet's "atmosphere" isn't transparent enough. */}
        {planetImage}
      </AppContext.Provider>

      {/* TODO: Change Loader behavior. */}
      {/* <Loader /> */}
    </main>
  );
}
