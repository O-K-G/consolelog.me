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
    const handleSubsectionScroll = (arrVal: number) => {
      handleScroll({
        sectionRef: childrenRefsArray[arrVal],
      });
    };

    if (val) {
      if (childrenRefsArray[currentSubsection + 1]) {
        return handleSubsectionScroll((currentSubsection += 1));
      }
    } else {
      if (childrenRefsArray[currentSubsection - 1]) {
        return handleSubsectionScroll((currentSubsection -= 1));
      }
    }
  };

  return handleSidescroll;
}
