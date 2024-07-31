import { type UseScrollByPathnameProps } from '@constants/interfaces';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, type MutableRefObject } from 'react';

export function useScrollByPathname({
  currentTopSection,
  topSectionRefs,
}: UseScrollByPathnameProps) {
  const isScrolled = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const isNotInView =
      !isScrolled.current && pathname !== '/' && pathname !== currentTopSection;

    if (isNotInView) {
      const { current: currentTopSectionRefs } = topSectionRefs;
      const key = pathname?.substring(1) as keyof typeof currentTopSectionRefs;
      const refToScrollTo = currentTopSectionRefs[
        key
      ] as MutableRefObject<HTMLDivElement>;

      if (refToScrollTo) {
        refToScrollTo.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        });
      }

      isScrolled.current = true;
    }
  }, [currentTopSection, pathname, topSectionRefs]);
}
