import ScrollIconComponent from '@components/shared/ScrollIconComponent';
import Attribution from '@components/Attribution';
import Shenanigans from '@components/Shenanigans';
import Planet from '@components/shared/Planet';
import ScrollToTopComponent from '@components/shared/ScrollToTopComponent';
import useHandleScrollAnimationTimelinePolyfill from '@hooks/useHandleScrollAnimationTimelinePolyfill';

export default function Footer() {
  /** In the future once Firefox and Safari fully support CSS' animation-timeline -
   * https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline ,
   * it should be better to use it rather than this useHandleScrollAnimationTimelinePolyfill hook.
   * Polyfill: 'useHandleScrollAnimationTimelinePolyfill' hook + 'animate-rotate-polyfill' + 'animate-background-polyfill' CSS classes.
   */

  useHandleScrollAnimationTimelinePolyfill();

  return (
    <footer className='mt-auto z-10 center-elements flex-col gap-2'>
      <Planet />
      <ScrollIconComponent />
      <ScrollToTopComponent />
      <Attribution />
      <Shenanigans />
    </footer>
  );
}
