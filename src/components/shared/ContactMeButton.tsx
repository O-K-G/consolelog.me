'use client';

import type { ContactMeButtonProps } from '@constants/interfaces';
import { useText } from '@hooks/useText';
import contactMe from '@i18nEn/contactMeButton.json';

export const CONTACT_ME_BUTTON_TEST_ID = 'contact-me-button-test';

export default function ContactMeButton({ onClick }: ContactMeButtonProps) {
  const t = useText();

  return (
    <button
      data-testid={CONTACT_ME_BUTTON_TEST_ID}
      onClick={onClick}
      type='button'
      className='z-10 uppercase outline-none fixed font-bebas-neue top-0 right-0 text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl mt-4 mr-4'
    >
      {t('contactMe', contactMe)}
    </button>
  );
}
