import type { UseHandleScrollAnimationTimelinePolyfillProps } from '@constants/interfaces';
import { useEffect, useRef } from 'react';

export default function useHandleScrollAnimationTimelinePolyfill({
  ref,
}: UseHandleScrollAnimationTimelinePolyfillProps) {
  const isAnimationTimeLineSupportedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current as unknown as HTMLDivElement;
      const num =
        window.scrollY / (document.body.offsetHeight - window.innerHeight);

      el.style.setProperty('--scroll', num?.toString());
    };

    const isAnimationTimeLineSupported =
      typeof window === 'object' &&
      CSS.supports('animation-timeline: scroll()');

    if (!isAnimationTimeLineSupported) {
      window.addEventListener('scroll', handleScroll);
    }

    isAnimationTimeLineSupportedRef.current = isAnimationTimeLineSupported;

    return () => {
      if (!isAnimationTimeLineSupported) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);

  return {
    isAnimationTimeLineSupported: isAnimationTimeLineSupportedRef.current,
  };
}
