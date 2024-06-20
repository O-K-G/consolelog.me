import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import ContactForm from '@components/contactForm/ContactForm';

export default function Contact() {
  return (
    <Section
      className='gap-2 sm:gap-0'
      backgroundClassName='bg-center'
      currentSection='contact'
    >
      <Title label='contact' labelGlowText='contact' />
      <ContactForm />
    </Section>
  );
}
