import Section from '@components/Section';
import Title from '@components/Title';

export default function About() {
  return (
    <Section backgroundClassName='bg-left-top' currentSection='about'>
      <Title
        component='h1'
        label='lorem ipsum dolor'
        leftLabel='LOREM IPSUM DOLOR SIT CONSECTETUR'
        rightLabel='LOREM IPSUM DOLOR SIT'
      />
    </Section>
  );
}
