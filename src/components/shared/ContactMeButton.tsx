'use client';

import { AppContext as appContext } from '@components/shared/AppContext';
import { useContext, type RefObject } from 'react';
import { useScroll } from '@hooks/useScroll';
import { useText } from '@hooks/useText';
import contactMe from '@i18nEn/contactMeButton.json';

export default function ContactMeButton() {
  const handleScroll = useScroll();
  const t = useText();

  const { contactSectionRef } = useContext(appContext);

  return (
    <button
      data-testid='contact-me-button-test'
      onClick={() =>
        handleScroll({
          sectionRef:
            contactSectionRef.current as unknown as RefObject<HTMLElement>,
        })
      }
      type='button'
      className='uppercase outline-none fixed font-bebas-neue top-0 right-0 z-10 text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl mt-4 mr-4'
    >
      {t('contactMe', contactMe)}
    </button>
  );
}
