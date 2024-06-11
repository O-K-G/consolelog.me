import { useMemo, type RefObject } from 'react';

export function useScroll() {
  const scroll = ({ sectionRef }: { sectionRef: RefObject<HTMLElement> }) => {
    const { current: sectionElement } = sectionRef;
    const scrollBehavior = {
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    } as const;

    (sectionElement as unknown as HTMLElement)?.scrollIntoView(scrollBehavior);
  };

  const handleScroll = useMemo(() => scroll, []);

  return handleScroll;
}
