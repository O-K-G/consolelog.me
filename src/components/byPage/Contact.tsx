import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import ContactForm from '@components/contactForm/ContactForm';
import { useText } from '@hooks/useText';
import contact from '@i18nEn/contact.json';
import SideLinks from '@components/shared/SideLinks';
import type { ContactProps } from '@constants/interfaces';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['contact_me']";

export default function Contact({ onClick }: ContactProps) {
  const t = useText();

  return (
    <Section className='min-h-screen h-screen fixed bottom-0 left-0 lg:gap-4'>
      <div className='absolute bg-cover bg-right top-0 left-0 h-screen w-screen bg-contact-sm md:bg-contact-md lg:bg-contact-lg xl:bg-contact-xl 2xl:bg-contact-2xl opacity-60' />
      <ContactGoBackButton onClick={onClick} className='left-0 ml-4'>
        {t('goBack', contact)}
      </ContactGoBackButton>
      <Title
        label={t('mainTitle', contact)}
        border
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
      />
      <ContactForm />
      <SideLinks
        className='center-elements w-16 md:w-24 h-fit z-10 sm:ml-4 md:ml-6 mt-auto'
        ulClassName='size-full center-elements gap-4'
      />
    </Section>
  );
}
