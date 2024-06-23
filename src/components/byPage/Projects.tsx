'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import skills from '@i18nEn/skills.json';
import { ClickToOpenButton } from '@components/shared/ClickToOpenButton';
import Subtitle from '@components/shared/Subtitle';

const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

export default function Projects() {
  const t = useText();

  return (
    <Section backgroundClassName='bg-center' currentSection='projects'>
      <Title label='projects' labelGlowText='projects' />

      <Subtitle
        label={t('subtitle', skills)}
        labelGlowText={SUBTITLE_GLOW_CLASSNAME}
      />

      <ClickToOpenButton alternativeLabel='TODO' />
    </Section>
  );
}
