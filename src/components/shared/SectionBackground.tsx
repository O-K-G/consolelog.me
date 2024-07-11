import type { CurrentSection } from '@constants/interfaces';
import { CACHE_VERSION } from '@root/tailwind.config';

/** This component is a fix to cases in mobile devices in which the user scrolls down in "extreme velocity",
 * and once the browser hits the bottom - the background flickers for a fraction of a second.
 */

const SUFFIX = `background.webp?cacheVersion=${CACHE_VERSION}`;

export default function SectionBackground({ currentSection }: CurrentSection) {
  return (
    <div className='absolute top-0 left-0 min-h-full h-screen w-screen inset-0'>
      <picture>
        <source
          srcSet={`${currentSection}-small-${SUFFIX}`}
          media='(max-width: 640px)'
        />
        <img
          className='object-cover object-left h-screen w-screen bottom-0 left-0 fixed'
          alt=''
          aria-hidden
          src={`${currentSection}-${SUFFIX}`}
        />
      </picture>
    </div>
  );
}
