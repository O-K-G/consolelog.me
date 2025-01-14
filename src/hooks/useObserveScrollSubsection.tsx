import { UseObserveScrollSubsectionProps } from '@constants/interfaces';
import { RefObject, useEffect } from 'react';

export default function useObserveScrollSubsection({
  id,
  scrollableRef,
  onSubsectionSelectChange,
  scrollableItemRef,
}: UseObserveScrollSubsectionProps) {
  useEffect(() => {
    const options = {
      root: (scrollableRef as RefObject<HTMLDivElement>)?.current,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleObserve = (e: IntersectionObserverEntry[]) => {
      const { isIntersecting } = e[0];

      if (isIntersecting) {
        onSubsectionSelectChange?.(Number(id));
      }
    };

    const observer = new IntersectionObserver(handleObserve, options);
    observer.observe(
      (scrollableItemRef as unknown as RefObject<HTMLDivElement>)?.current
    );

    return () => observer.disconnect();
  }, [id, onSubsectionSelectChange, scrollableItemRef, scrollableRef]);
}
