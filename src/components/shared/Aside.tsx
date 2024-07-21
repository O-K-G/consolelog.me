'use client';

import { type RefObject, useEffect, useRef, useState } from 'react';
import Contact from '@components/byPage/Contact';
import { usePathname } from 'next/navigation';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import contactGoBackButtonText from '@i18nEn/ContactGoBackButtonText.json';
import useHandleScroll from '@hooks/useHandleScroll';
import { useText } from '@hooks/useText';

export default function Aside() {
  const t = useText();
  const [open, setOpen] = useState<boolean | null>(null);
  const pathname = usePathname();
  const asideRef = useRef(null);
  const [openAtTransitionEnd, setOpenAtTransitionEnd] = useState(false);
  const { disableScroll, enableScroll } = useHandleScroll();

  useEffect(() => {
    if (open === null && pathname?.substring(1) === 'contact') {
      disableScroll();
      setOpenAtTransitionEnd(true);
      setOpen(true);
    }
  }, [disableScroll, open, pathname]);

  useEffect(() => {
    const { current } = asideRef as RefObject<HTMLDivElement>;

    const handleTransition = () => {
      let touchX = 0;

      const handleTouchMove = (e: TouchEvent) => {
        const sensitivityFactor = touchX - e.touches[0].clientX > 50;

        if (touchX > e.touches[0].clientX && sensitivityFactor) {
          current?.removeEventListener('touchmove', handleTouchMove);
          enableScroll();
          setOpen(false);
        }
      };

      const handleTouchStart = (e: TouchEvent) => {
        touchX = e.touches[0].clientX;
        current?.removeEventListener('touchstart', handleTouchStart);
        current?.addEventListener('touchmove', handleTouchMove);
      };

      if (!open) {
        setOpenAtTransitionEnd(false);
      } else {
        current?.addEventListener('touchstart', handleTouchStart);
      }
    };

    current?.addEventListener('transitionend', handleTransition);

    return () =>
      current?.removeEventListener('transitionend', handleTransition);
  }, [enableScroll, open]);

  return (
    <>
      <ContactGoBackButton
        onClick={() => {
          disableScroll();
          setOpenAtTransitionEnd(true);
          setOpen(true);
        }}
      >
        {t('contactMe', contactGoBackButtonText)}
      </ContactGoBackButton>
      <aside
        ref={asideRef}
        aria-hidden={!open}
        className={`z-10 transition-all ease-in-out duration-700 lg:duration-1000 fixed flex items-start justify-start h-screen w-screen top-0 ${
          !open ? '-left-[100vw] size-0 overflow-hidden' : 'left-0'
        }`}
      >
        <Contact
          open={openAtTransitionEnd}
          onClick={() => {
            enableScroll();
            setOpen(false);
          }}
        />
      </aside>
    </>
  );
}
