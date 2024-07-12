'use client';

import { useEffect, useState } from 'react';
import Contact from '@components/byPage/Contact';
import { usePathname } from 'next/navigation';
import ContactMeButton from '@components/shared/ContactMeButton';

export default function Aside() {
  const [open, setOpen] = useState<boolean | null>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (open === null && pathname?.substring(1) === 'contact') {
      setOpen(true);
    }
  }, [open, pathname]);

  return (
    <>
      <ContactMeButton onClick={() => setOpen((prevValue) => !prevValue)} />
      <aside
        aria-hidden={!open}
        className={`z-10 transition-1000 h-svh w-svw lg:h-dvh lg:w-dvw fixed top-0 left-0 ${
          !open ? '-translate-x-full' : ''
        }`}
      >
        <Contact onClick={() => setOpen(false)} />
      </aside>
    </>
  );
}
