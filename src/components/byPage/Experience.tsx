'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import Attribution from '@components/Attribution';

export default function Experience() {
  return (
    <Section backgroundClassName='bg-top-left' currentSection='experience'>
      <Title label='experience' labelGlowText='experience' />
      <Attribution />
    </Section>
  );
}
