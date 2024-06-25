'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import skills from '@i18nEn/skills.json';
import projects from '@i18nEn/projects.json';
import { ClickToOpenButton } from '@components/shared/ClickToOpenButton';
import Subtitle from '@components/shared/Subtitle';
import ScrollableSubsection from '@components/shared/ScrollableSubsection';
import { useRef } from 'react';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_projects']";
const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

export default function Projects() {
  const t = useText();
  const subsection1 = useRef(null);
  const subsection2 = useRef(null);
  const childrenRefsArray = [subsection1, subsection2];

  return (
    <Section backgroundClassName='bg-center' currentSection='projects'>
      <Title
        label={t('mainTitle', projects)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />
      <ScrollableSubsection childrenRefsArray={childrenRefsArray}>
        <div
          ref={subsection1}
          className='border border-yellow-500 h-full min-w-full center-elements flex-col gap-24'
        >
          <Subtitle
            label={t('subtitle', skills)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </div>
        <div
          ref={subsection2}
          className='border border-green-500 h-full min-w-full center-elements flex-col gap-24'
        >
          <Subtitle
            label={t('subtitle', skills)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </div>
      </ScrollableSubsection>
    </Section>
  );
}
