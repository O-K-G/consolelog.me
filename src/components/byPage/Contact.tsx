import Section from '@components/shared/Section';
import ContactForm from '@components/contactForm/ContactForm';
import { useTranslations } from 'next-intl';
import SideLinks from '@components/shared/SideLinks';
import type { ContactProps } from '@constants/interfaces';
import ContactGoBackButton from '@components/shared/ContactGoBackButton';
import Title from '@components/shared/title/Title';
import SectionBackground from '@components/shared/SectionBackground';

const CURRENT_SECTION = 'contact';

export default function Contact({ onClick, open }: ContactProps) {
  const t = useTranslations('contact');

  return (
    <Section className='min-h-screen h-screen pt-20 md:pt-10 overscroll-contain'>
      <SectionBackground currentSection={CURRENT_SECTION} />
      {open && (
        <>
          <ContactGoBackButton
            onClick={onClick}
            className='ltr:left-0 rtl:right-0 ltr:ml-4 rtl:mr-4 absolute'
          >
            {t('goBack')}
          </ContactGoBackButton>
          <Title border>{t('mainTitle')}</Title>
          <div className='center-elements flex-col size-full gap-2 sm:gap-6 lg:gap-4'>
            <ContactForm />
            <SideLinks
              hideChangeLanguageButton
              className='center-elements w-16 md:w-24 h-fit z-10 sm:ml-4 md:ml-6'
              ulClassName='size-full center-elements gap-4'
            />
          </div>
        </>
      )}
    </Section>
  );
}
