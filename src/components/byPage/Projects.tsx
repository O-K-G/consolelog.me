'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
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
  const subsection3 = useRef(null);
  const childrenRefsArray = [subsection1, subsection2, subsection3];

  return (
    <Section backgroundClassName='bg-center' currentSection='projects'>
      <Title
        label={t('mainTitle', projects)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />
      <ScrollableSubsection childrenRefsArray={childrenRefsArray}>
        <ScrollableSubsection.Item ref={subsection1}>
          <Subtitle
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item ref={subsection2}>
          <Subtitle
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item ref={subsection3}>
          <Subtitle
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    </Section>
  );
}
