import type { CurrentSection } from '@constants/interfaces';
import { type ForwardedRef, forwardRef, type RefObject } from 'react';
import { useScroll } from '@hooks/useScroll';
import { useText } from '@hooks/useText';
import contactMe from '@i18nEn/contactMeButton.json';

function ContactMeButton(
  { currentSection }: CurrentSection,
  ref: ForwardedRef<HTMLElement>
) {
  const handleScroll = useScroll();
  const t = useText();

  if (currentSection !== 'contact') {
    return null;
  }

  return (
    <button
      onClick={() =>
        handleScroll({ sectionRef: ref as RefObject<HTMLElement> })
      }
      type='button'
      className='uppercase fixed font-bebas-neue top-0 right-0 z-10 text-white text-base sm:text-xl md:text-4xl xl:text-8xl mt-4 mr-4'
    >
      {t('contactMe', contactMe)}
    </button>
  );
}

export default forwardRef(ContactMeButton);
