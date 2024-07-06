import { type MutableRefObject, useEffect, useContext } from 'react';
import { useScroll } from '@hooks/useScroll';
import { AppContext as appContext } from '@components/shared/AppContext';
import type { UseHandleScrollByPathNameProps } from '@constants/interfaces';
import { usePathname } from 'next/navigation';

export default function useScrollByPathName({
  currentSection,
  sectionRef,
}: UseHandleScrollByPathNameProps) {
  const pathname = usePathname();
  const handleScroll = useScroll();
  const { contactSectionRef } = useContext(appContext);

  useEffect(() => {
    if (
      currentSection === 'contact' &&
      sectionRef.current &&
      !contactSectionRef.current
    ) {
      (contactSectionRef.current as unknown as MutableRefObject<null>) =
        sectionRef;
    }

    if (currentSection === pathname?.substring(1)) {
      handleScroll({ sectionRef });
    }
  }, [contactSectionRef, currentSection, handleScroll, pathname, sectionRef]);
}
