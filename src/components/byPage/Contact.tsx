import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import ContactForm from '@components/contactForm/ContactForm';
import { useText } from '@hooks/useText';
import content from '@i18nEn/contact.json';
import SideLinks from '@components/shared/SideLinks';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['contact_me']";

export default function Contact() {
  const t = useText();

  return (
    <Section
      className='gap-8'
      defaultHeight='min-h-svh lg:min-h-dvh'
      backgroundClassName='bg-center'
      currentSection='contact'
    >
      <Title
        label={t('mainTitle', content)}
        border
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
      />
      <ContactForm />
      <SideLinks
        className='center-elements w-16 md:w-24 h-fit'
        ulClassName='size-full center-elements gap-4'
      />
    </Section>
  );
}
