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

  const sizeAndPositionClassName = {
    containerPositionClassName:
      '-bottom-[30%] sm:-bottom-[50%] md:-bottom-[70%] lg:-bottom-[60%] xl:-bottom-[100%] 2xl:-bottom-[100%]',
    imageSizeClassName:
      'max-h-[50vh] sm:max-h-[80vh] md:max-h-screen lg:max-h-none lg:max-w-[60dvw] xl:max-w-[90dvw] 2xl:w-[100dvw]',
  };

  const { containerPositionClassName, imageSizeClassName } =
    sizeAndPositionClassName;

  return (
    <div
      className={`h-fit w-fit fixed right-0 left-0 center-elements mx-auto rounded-full ${containerPositionClassName}`}
    >
      <div
        className={`size-full center-elements transition-1000 before:absolute before:-z-10 before:size-full before:rounded-full before:blur-lg before:-translate-y-[5%] before:bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] before:from-[#00B1FF] before:to-transparent ${
          rotationClasses || ''
        }`}
      >
        <img
          alt={t('alt')}
          src={`/images/planet.webp?cacheVersion=${CACHE_VERSION}`}
          className={`rounded-full ${imageSizeClassName}`}
        />
      </div>
    </div>
  );
}
