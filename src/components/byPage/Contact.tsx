import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import ContactForm from '@components/contactForm/ContactForm';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['contact_me']";

export default function Contact() {
  return (
    <Section
      className='gap-8'
      backgroundClassName='bg-center'
      currentSection='contact'
    >
      <Title
        label='contact me'
        border
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
      />
      <ContactForm />
    </Section>
  );
}
