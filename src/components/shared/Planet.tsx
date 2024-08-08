'use client';

import { CACHE_VERSION } from '@root/tailwind.config';
import { useContext } from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';
import { DIRECTION_BY_LANGUAGE } from '@constants/LocaleDirection';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Planet() {
  const { currentTopSection } = useContext(appContext);
  const { locale } = useParams() || {};
  const t = useTranslations('planet');
  const dir =
    DIRECTION_BY_LANGUAGE[locale as keyof typeof DIRECTION_BY_LANGUAGE];
  const isLtr = dir === 'ltr';
  const rotationClassNameBySection = {
    skills: isLtr ? 'rotate-90' : '-rotate-90',
    projects: isLtr ? 'rotate-180' : '-rotate-180',
    experience: isLtr ? 'rotate-270' : '-rotate-270',
  } as const;

  const rotationClasses =
    rotationClassNameBySection[
      currentTopSection as keyof typeof rotationClassNameBySection
    ];

  return (
    <div className='h-fit w-fit fixed right-0 left-0 bottom-0 translate-y-[65%] center-elements mx-auto rounded-full'>
      <div
        className={`size-full center-elements transition-1000 before:absolute before:-z-10 before:size-full before:rounded-full before:blur-lg before:-translate-y-[5%] before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-[#00B1FF] before:to-transparent ${
          rotationClasses || ''
        }`}
      >
        <img
          className='rounded-full max-h-[50svh] sm:max-h-[80svh] md:max-h-[100svh] lg:max-h-none lg:max-w-[70dvw] xl:max-w-[70dvw] 2xl:w-[100dvw]'
          alt={t('alt')}
          src={`/images/planet.webp?cacheVersion=${CACHE_VERSION}`}
        />
      </div>
    </div>
  );
}
