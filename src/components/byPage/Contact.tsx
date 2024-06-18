import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import ContactForm from '@components/ContactForm';

export default function Contact() {
  return (
    <Section
      className='gap-2 sm:gap-0 h-[150svh] lg:h-dvh w-svw lg:w-dvw'
      backgroundClassName='bg-center'
      currentSection='contact'
    >
      <Title label='contact' labelGlowText='contact' />
      <ContactForm />
    </Section>
  );
}
