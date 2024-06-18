import Section from '@components/shared/Section';
import Title from '@components/title/Title';

export default function Projects() {
  return (
    <Section
      className='h-svh lg:h-dvh w-svw lg:w-dvw'
      backgroundClassName='bg-center'
      currentSection='projects'
    >
      <Title label='projects' labelGlowText='projects' />
    </Section>
  );
}
