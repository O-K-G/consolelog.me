'use client';

import { TransitionEventHandler, useEffect, useRef, useState } from 'react';
import Contact from '@components/byPage/Contact';
import { usePathname, useParams } from 'next/navigation';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import { useTranslations } from 'next-intl';
import getDirByLocale from '@utils/getDirByLocale';

export default function Aside() {
  const t = useTranslations('contactGoBackButtonText');
  const [open, setOpen] = useState<boolean | null>(null);
  const pathname = usePathname();
  const [openAtTransitionEnd, setOpenAtTransitionEnd] = useState(false);
  const { locale }: { locale: string } = useParams() || {};

  useEffect(() => {
    if (open === null && pathname?.includes(`${locale as string}/contact`)) {
      setOpenAtTransitionEnd(true);
      setOpen(true);
    }
  }, [locale, open, pathname]);

  const handleTransitionEnd = ({
    target,
  }: {
    target: TransitionEventHandler<HTMLElement>;
  }) => {
    let touchX = 0;
    const el = target as unknown as HTMLElement;

    const handleTouchMove = (e: Event) => {
      const dir = getDirByLocale({ locale });
      const isLTR = dir === 'ltr';
      const slideDifference = isLTR
        ? touchX - (e as TouchEvent).touches[0].clientX
        : (e as TouchEvent).touches[0].clientX - touchX;

      const sensitivityFactor = slideDifference > 50;

      const touchEnd = isLTR
        ? touchX > (e as TouchEvent).touches[0].clientX
        : touchX < (e as TouchEvent).touches[0].clientX;

      if (touchEnd && sensitivityFactor) {
        el?.removeEventListener('touchmove', handleTouchMove);
        setOpen(false);
      }
    };

    const handleTouchStart = (e: Event) => {
      touchX = (e as TouchEvent).touches[0].clientX;
      el?.removeEventListener('touchstart', handleTouchStart);
      el?.addEventListener('touchmove', handleTouchMove);
    };

    if (!open) {
      setOpenAtTransitionEnd(false);
    } else {
      el?.addEventListener('touchstart', handleTouchStart);
    }
  };

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
        onTransitionEnd={
          handleTransitionEnd as unknown as TransitionEventHandler<HTMLElement>
        }
        data-open={!!open}
        aria-hidden={!open}
        className="data-[open=false]:aside-closed data-[open=true]:aside-open z-10 transition-all ease-in-out duration-700 lg:duration-1000 overflow-x-hidden fixed flex items-start justify-start h-screen top-0"
      >
        <Contact open={openAtTransitionEnd} onClick={() => setOpen(false)} />
      </aside>
    </>
  );
}
