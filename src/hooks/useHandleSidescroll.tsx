import { useScroll } from '@hooks/useScroll';
import { type MutableRefObject } from 'react';

export default function useHandleSidescroll({
  childrenRefsArray,
}: {
  childrenRefsArray: Array<MutableRefObject<null>>;
}) {
  const handleScroll = useScroll();
  let currentSubsection = 0;

  const handleSidescroll = (val: boolean) => {
    if (val) {
      const nextSubsection = currentSubsection + 1;

      if (childrenRefsArray[nextSubsection]) {
        currentSubsection = nextSubsection;
        return handleScroll({
          sectionRef: childrenRefsArray[nextSubsection],
        });
      }
    } else {
      const previousSubsection = currentSubsection - 1;

      if (childrenRefsArray[previousSubsection]) {
        currentSubsection = previousSubsection;
        return handleScroll({
          sectionRef: childrenRefsArray[previousSubsection],
        });
      }
    }
  };

  const disableLeft = false;
  const disableRight = false;

  return { handleSidescroll, disableLeft, disableRight };
}
