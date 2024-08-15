import type { UseHandleScrollAnimationTimelinePolyfillProps } from '@constants/interfaces';
import { useEffect } from 'react';

/** In the future once Firefox and Safari fully support CSS' animation-timeline -
 * https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline ,
 * it should be better to use it rather than this useHandleScrollAnimationTimelinePolyfill hook.
 * Polyfill: 'useHandleScrollAnimationTimelinePolyfill' hook + 'animate-rotate-polyfill' CSS class.
 */

export default function useHandleScrollAnimationTimelinePolyfill({
  ref,
}: UseHandleScrollAnimationTimelinePolyfillProps) {
  const isAnimationTimeLineSupported =
    typeof window === 'object' && CSS.supports('animation-timeline: scroll()');

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current as unknown as HTMLDivElement;
      const num =
        window.scrollY / (document.body.offsetHeight - window.innerHeight);

      el.style.setProperty('--scroll', num?.toString());
    };

    if (!isAnimationTimeLineSupported) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (!isAnimationTimeLineSupported) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isAnimationTimeLineSupported, ref]);
}
