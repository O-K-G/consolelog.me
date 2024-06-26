'use client';

import type { UseHandleObserveAndScrollByPathNameProps } from '@constants/interfaces';
import { AppContext as appContext } from '@components/shared/AppContext';
import { useContext, useEffect } from 'react';

export default function useHandleObserve({
  currentSection,
  sectionRef,
}: UseHandleObserveAndScrollByPathNameProps) {
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

    const observer = new IntersectionObserver(handleObserve, options);
    observer.observe(sectionRef.current as unknown as HTMLElement);

    return () => observer.disconnect();
  }, [currentSection, sectionRef, setCurrentTopSection]);
}
