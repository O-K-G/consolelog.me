import Section from '@components/shared/Section';
import ContactForm from '@components/contactForm/ContactForm';
import { useText } from '@hooks/useText';
import contact from '@i18nEn/contact.json';
import SideLinks from '@components/shared/SideLinks';
import type { ContactProps } from '@constants/interfaces';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import Title from '@components/shared/title/Title';
import SectionBackground from '@components/shared/SectionBackground';

const CURRENT_SECTION = 'contact';

export default function Contact({ onClick, open }: ContactProps) {
  const t = useText();

  return (
    <Section className='min-h-screen h-screen justify-around'>
      <SectionBackground currentSection={CURRENT_SECTION} />
      {open && (
        <>
          <ContactGoBackButton
            onClick={onClick}
            className='left-0 ml-4 absolute'
          >
            {t('goBack', contact)}
          </ContactGoBackButton>
          <Title border>{t('mainTitle', contact)}</Title>
          <ContactForm />
          <SideLinks
            className='center-elements w-16 md:w-24 h-fit z-10 sm:ml-4 md:ml-6'
            ulClassName='size-full center-elements gap-4'
          />
        </>
      )}
    </Section>
  );
}
