import Section from '@components/shared/Section';
import Title from '@components/title/Title';

export default function Experience() {
  return (
    <Section
      className='h-svh lg:h-dvh'
      backgroundClassName='bg-top-left'
      currentSection='experience'
    >
      <Title label='experience' labelGlowText='experience' />
    </Section>
  );
}
