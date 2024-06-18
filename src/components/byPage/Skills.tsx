import Section from '@components/shared/Section';
import Title from '@components/title/Title';

export default function Skills() {
  return (
    <Section
      className='h-svh lg:h-dvh w-svw lg:w-dvw'
      backgroundClassName='bg-center'
      currentSection='skills'
    >
      <Title label='skills' labelGlowText='skills' />
    </Section>
  );
}
