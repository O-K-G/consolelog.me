'use client';

import { useEffect, useState } from 'react';
import Contact from '@components/byPage/Contact';
import { usePathname } from 'next/navigation';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import contactGoBackButtonText from '@i18nEn/ContactGoBackButtonText.json';
import { useText } from '@hooks/useText';

export default function Aside() {
  const t = useText();
  const [open, setOpen] = useState<boolean | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (open === null && pathname?.substring(1) === 'contact') {
      setOpen(true);
    }
  }, [open, pathname]);

  return (
    <>
      <ContactGoBackButton onClick={() => setOpen(true)}>
        {t('contactMe', contactGoBackButtonText)}
      </ContactGoBackButton>
      <aside
        aria-hidden={!open}
        className={`z-10 transition-1000 flex items-start justify-start h-svh w-svw lg:h-dvh lg:w-dvw fixed top-0 ${
          !open ? '-left-[100svw] lg:-left-[100dvw]' : 'left-0'
        }`}
      >
        <Contact onClick={() => setOpen(false)} />
      </aside>
    </>
  );
}
