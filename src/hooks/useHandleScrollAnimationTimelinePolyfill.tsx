import { useEffect } from 'react';

/** In the future once Firefox and Safari fully support CSS' animation-timeline -
 * https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline ,
 * it should be better to use it rather than this useHandleScrollAnimationTimelinePolyfill hook.
 * Polyfills to remove: 'useHandleScrollAnimationTimelinePolyfill' hook + 'animate-rotate-polyfill'
 * + 'animate-hide-components-polyfill' + 'animate-show-components-polyfill' CSS classes.
 */

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
