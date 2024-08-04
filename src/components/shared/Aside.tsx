'use client';

import { type RefObject, useEffect, useRef, useState } from 'react';
import Contact from '@components/byPage/Contact';
import { usePathname, useParams } from 'next/navigation';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import useHandleScroll from '@hooks/useHandleScroll';
import { useTranslations } from 'next-intl';
import { DIRECTION_BY_LANGUAGE } from '@constants/LocaleDirection';

export default function Aside() {
  const t = useTranslations('contactGoBackButtonText');
  const [open, setOpen] = useState<boolean | null>(null);
  const pathname = usePathname();
  const asideRef = useRef(null);
  const [openAtTransitionEnd, setOpenAtTransitionEnd] = useState(false);
  const { disableScroll, enableScroll } = useHandleScroll();
  const { locale } = useParams() || {};

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
        const dir =
          DIRECTION_BY_LANGUAGE[locale as keyof typeof DIRECTION_BY_LANGUAGE];
        const isLTR = dir === 'ltr';
        const slideDifference = isLTR
          ? touchX - e.touches[0].clientX
          : e.touches[0].clientX - touchX;

        const sensitivityFactor = slideDifference > 50;

        const touchEnd = isLTR
          ? touchX > e.touches[0].clientX
          : touchX < e.touches[0].clientX;

        if (touchEnd && sensitivityFactor) {
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
  }, [enableScroll, locale, open]);

  return (
    <>
      <ContactGoBackButton
        onClick={() => {
          disableScroll();
          setOpenAtTransitionEnd(true);
          setOpen(true);
        }}
      >
        {t('contactMe')}
      </ContactGoBackButton>
      <aside
        ref={asideRef}
        aria-hidden={!open}
        className={`z-10 transition-all ease-in-out duration-700 lg:duration-1000 fixed flex items-start justify-start h-screen w-screen top-0 ${
          !open
            ? 'ltr:-left-[100vw] rtl:-right-[100vw] size-0 overflow-hidden'
            : 'ltr:left-0 rtl:right-0'
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
