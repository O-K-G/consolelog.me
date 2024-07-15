'use client';

import { type RefObject, useEffect, useRef, useState } from 'react';
import Contact from '@components/byPage/Contact';
import { usePathname } from 'next/navigation';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import contactGoBackButtonText from '@i18nEn/ContactGoBackButtonText.json';
import { useText } from '@hooks/useText';

export default function Aside() {
  const t = useText();
  const [open, setOpen] = useState<boolean | null>(null);
  const pathname = usePathname();
  const asideRef = useRef(null);
  const [openAtTransitionEnd, setOpenAtTransitionEnd] = useState(false);

  useEffect(() => {
    if (open === null && pathname?.substring(1) === 'contact') {
      setOpenAtTransitionEnd(true);
      setOpen(true);
    }
  }, [open, pathname]);

  useEffect(() => {
    const { current } = asideRef as RefObject<HTMLDivElement>;

    const handleTransition = () => {
      if (!open) {
        setOpenAtTransitionEnd(false);
      }
    };

    current?.addEventListener('transitionend', handleTransition);

    return () =>
      current?.removeEventListener('transitionend', handleTransition);
  }, [open]);

  return (
    <>
      <ContactGoBackButton
        onClick={() => {
          setOpenAtTransitionEnd(true);
          setOpen(true);
        }}
      >
        {t('contactMe', contactGoBackButtonText)}
      </ContactGoBackButton>
      <aside
        ref={asideRef}
        aria-hidden={!open}
        className={`z-10 transition-1000 flex items-start justify-start h-svh w-svw lg:h-dvh lg:w-dvw top-0 ${
          !open
            ? '-left-[100svw] lg:-left-[100dvw] size-0 absolute overflow-hidden'
            : 'left-0 fixed'
        }`}
      >
        {openAtTransitionEnd && <Contact onClick={() => setOpen(false)} />}
      </aside>
    </>
  );
}
