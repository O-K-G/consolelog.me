import { type UseScrollByPathnameProps } from '@constants/interfaces';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, type MutableRefObject } from 'react';
import { DIRECTION_BY_LANGUAGE as dirObj } from '@/constants/LocaleDirection';

export function useScrollByPathname({
  currentTopSection,
  topSectionRefs,
}: UseScrollByPathnameProps) {
  const isScrolled = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    let value = 0;

    if (pathname?.length >= 4) {
      pathname.split('/').find((str) => {
        const obj = dirObj[str as keyof typeof dirObj];

        if (obj) {
          value = obj.length;
        }

        return value;
      });
    }

    const slicedPathname = pathname?.substring(value + 1);

    const isNotInView =
      !isScrolled.current &&
      pathname &&
      slicedPathname &&
      pathname !== '/' &&
      pathname !== currentTopSection &&
      pathname !== `/${slicedPathname}` &&
      slicedPathname !== currentTopSection;

    if (isNotInView) {
      const { current: currentTopSectionRefs } = topSectionRefs;
      const key = slicedPathname as keyof typeof currentTopSectionRefs;

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
