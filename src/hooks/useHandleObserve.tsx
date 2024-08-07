'use client';

import type { UseHandleObserveProps } from '@constants/interfaces';
import { AppContext as appContext } from '@components/shared/AppContext';
import { useContext, useEffect } from 'react';

export default function useHandleObserve({
  currentSection,
  middleSectionRef,
}: UseHandleObserveProps) {
  const { onChange: setCurrentTopSection } = useContext(appContext);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0,
    };

    const handleObserve = (e: IntersectionObserverEntry[]) => {
      const { isIntersecting } = e[0];

      if (isIntersecting) {
        setCurrentTopSection(currentSection as unknown as string);
      }
    };

    const observer = currentSection
      ? new IntersectionObserver(handleObserve, options)
      : null;

    if (currentSection) {
      observer?.observe(middleSectionRef.current as unknown as HTMLElement);
    }

    return () => {
      if (currentSection) {
        observer?.disconnect();
      }
    };
  }, [currentSection, middleSectionRef, setCurrentTopSection]);
}
