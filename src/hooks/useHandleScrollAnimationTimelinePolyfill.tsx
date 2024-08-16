import { useEffect } from 'react';

export default function useHandleScrollAnimationTimelinePolyfill() {
  const isAnimationTimeLineSupported =
    typeof window === 'object' && CSS.supports('animation-timeline: scroll()');

  useEffect(() => {
    const handleScroll = () => {
      const num =
        window.scrollY / (document.body.offsetHeight - window.innerHeight);

      document.body.style.setProperty('--scroll', num?.toString());
    };

    if (!isAnimationTimeLineSupported) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (!isAnimationTimeLineSupported) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isAnimationTimeLineSupported]);
}
