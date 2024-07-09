import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import ContactForm from '@components/contactForm/ContactForm';
import { useText } from '@hooks/useText';
import content from '@i18nEn/contact.json';
import SideLinks from '@components/shared/SideLinks';

const CURRENT_SECTION = 'contact';
const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['contact_me']";

export default function Contact() {
  const t = useText();

  return (
    <Section
      paddingClassName='pt-8 md:pt-16 px-4 pb-4'
      currentSection={CURRENT_SECTION}
    >
      <Title
        label={t('mainTitle', content)}
        border
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
      />
      <ContactForm />
      <SideLinks
        className='center-elements w-16 md:w-24 h-fit z-10 sm:ml-4 md:ml-6'
        ulClassName='size-full center-elements gap-4'
      />
    </Section>
  );
}
