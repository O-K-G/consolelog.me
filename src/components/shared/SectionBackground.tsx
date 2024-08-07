import type { CurrentSection } from '@constants/interfaces';
import { CACHE_VERSION } from '@root/tailwind.config';
import { TAILWIND_SIZES } from '@constants/imagesConfig';

/** This component is a fix to cases in mobile devices in which the user scrolls down in "extreme velocity",
 * and once the browser hits the bottom - the background flickers for a fraction of a second.
 */

const SUFFIX = `.webp?cacheVersion=${CACHE_VERSION}`;

export default function SectionBackground({ currentSection }: CurrentSection) {
  if (!currentSection) {
    return null;
  }

  return (
    <div className='absolute top-0 left-0 min-h-full h-screen w-screen clip-path-inset-0'>
      <picture>
        {TAILWIND_SIZES.map(({ twClassName, pxResolution }) => (
          <source
            key={`tw-class-${twClassName}`}
            srcSet={`/images/${currentSection}-${twClassName}${SUFFIX}`}
            media={`(max-width: ${pxResolution}px)`}
          />
        ))}
        <img
          className='object-cover object-left h-screen w-screen bottom-0 left-0 fixed opacity-60'
          alt=''
          aria-hidden
          src={`/images/${currentSection}-2xl${SUFFIX}`}
        />
      </picture>
    </div>
  );
}
