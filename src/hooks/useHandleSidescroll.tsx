import { useScroll } from '@hooks/useScroll';
import { useEffect, useState, type MutableRefObject } from 'react';

export default function useHandleSidescroll({
  childrenRefsArray,
}: {
  childrenRefsArray: Array<MutableRefObject<null>>;
}) {
  const handleScroll = useScroll();
  const [currentSubsection, setCurrentSubsection] = useState(0);

  useEffect(
    () =>
      handleScroll({
        sectionRef: childrenRefsArray[currentSubsection],
      }),
    [childrenRefsArray, currentSubsection, handleScroll]
  );

  const handleSidescroll = (val: boolean) => {
    if (val) {
      const nextSubsection = currentSubsection + 1;

      if (childrenRefsArray[nextSubsection]) {
        return setCurrentSubsection(nextSubsection);
      }
    } else {
      const previousSubsection = currentSubsection - 1;

      if (childrenRefsArray[previousSubsection]) {
        return setCurrentSubsection(previousSubsection);
      }
    }
  };

  const disableLeft = !currentSubsection;
  const disableRight = currentSubsection === childrenRefsArray.length - 1;

  return { handleSidescroll, disableLeft, disableRight };
}
