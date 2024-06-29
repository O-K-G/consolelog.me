'use client';

import { AppContext as appContext } from '@components/shared/AppContext';
import { useContext, type RefObject } from 'react';
import { useScroll } from '@hooks/useScroll';
import { useText } from '@hooks/useText';
import contactMe from '@i18nEn/contactMeButton.json';

const CONTACT_ME_BUTTON_TEST_ID = 'contact-me-button-test';

export default function ContactMeButton() {
  const handleScroll = useScroll();
  const t = useText();

  const { contactSectionRef } = useContext(appContext);

  return (
    <button
      data-testid={CONTACT_ME_BUTTON_TEST_ID}
      onClick={() =>
        handleScroll({
          sectionRef:
            contactSectionRef.current as unknown as RefObject<HTMLElement>,
        })
      }
      type='button'
      className='uppercase outline-none fixed font-bebas-neue top-0 right-0 z-20 text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl mt-4 mr-4'
    >
      {t('contactMe', contactMe)}
    </button>
  );
}
