'use client';

import { RefObject, useEffect, useRef, useState } from 'react';
import Contact from '@components/byPage/Contact';
import { usePathname, useParams } from 'next/navigation';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import { useTranslations } from 'next-intl';
import getDirByLocale from '@utils/getDirByLocale';

export default function Aside() {
  const t = useTranslations('contactGoBackButtonText');
  const [open, setOpen] = useState<boolean | null>(null);
  const pathname = usePathname();
  const asideRef = useRef(null);
  const [openAtTransitionEnd, setOpenAtTransitionEnd] = useState(false);
  const { locale }: { locale: string } = useParams() || {};

  useEffect(() => {
    if (open === null && pathname?.includes(`${locale as string}/contact`)) {
      setOpenAtTransitionEnd(true);
      setOpen(true);
    }
  }, [locale, open, pathname]);

  useEffect(() => {
    const { current } = asideRef as RefObject<HTMLDivElement | null>;

    const handleTransition = () => {
      let touchX = 0;

      const handleTouchMove = (e: TouchEvent) => {
        const dir = getDirByLocale({ locale });
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
  }, [locale, open]);

  return (
    <>
      <ContactGoBackButton
        onClick={() => {
          setOpenAtTransitionEnd(true);
          setOpen(true);
        }}
      >
        {t('contactMe')}
      </ContactGoBackButton>
      <aside
        data-open={!!open}
        ref={asideRef}
        aria-hidden={!open}
        className="data-[open=false]:aside-closed data-[open=true]:aside-open z-10 transition-all ease-in-out duration-700 lg:duration-1000 overflow-x-hidden fixed flex items-start justify-start h-screen top-0"
      >
        <Contact open={openAtTransitionEnd} onClick={() => setOpen(false)} />
      </aside>
    </>
  );
}
