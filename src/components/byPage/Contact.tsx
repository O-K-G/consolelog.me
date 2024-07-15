import Section from '@components/shared/Section';
import ContactForm from '@components/contactForm/ContactForm';
import { useText } from '@hooks/useText';
import contact from '@i18nEn/contact.json';
import SideLinks from '@components/shared/SideLinks';
import type { ContactProps } from '@constants/interfaces';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import Title from '@components/shared/title/Title';

export default function Contact({ onClick }: ContactProps) {
  const t = useText();

  return (
    <Section className='min-h-screen h-screen lg:gap-4 pt-20 md:pt-10'>
      <div className='absolute bg-cover bg-right top-0 left-0 h-screen w-screen bg-contact-sm md:bg-contact-md lg:bg-contact-lg xl:bg-contact-xl 2xl:bg-contact-2xl opacity-60' />
      <ContactGoBackButton onClick={onClick} className='left-0 ml-4 absolute'>
        {t('goBack', contact)}
      </ContactGoBackButton>
      <Title border>{t('mainTitle', contact)}</Title>
      <ContactForm />
      <SideLinks
        className='center-elements w-16 md:w-24 h-fit z-10 sm:ml-4 md:ml-6 mt-auto'
        ulClassName='size-full center-elements gap-4'
      />
    </Section>
  );
}
