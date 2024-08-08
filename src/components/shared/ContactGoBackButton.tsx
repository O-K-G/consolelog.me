'use client';

import type { ContactGoBackButtonProps } from '@constants/interfaces';

export const CONTACT_ME_BUTTON_TEST_ID = 'contact-me-button-test';

export default function ContactGoBackButton({
  children,
  onClick,
  className = 'ltr:right-0 rtl:left-0 ltr:mr-4 rtl:ml-4 fixed',
}: ContactGoBackButtonProps) {
  return (
    <button
      data-testid={CONTACT_ME_BUTTON_TEST_ID}
      onClick={onClick}
      type='button'
      className={`z-10 uppercase outline-none contact-go-button-font-classNames top-0 text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl mt-4 ${className}`}
    >
      {children}
    </button>
  );
}
