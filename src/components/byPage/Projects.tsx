'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import projects from '@i18nEn/projects.json';
import Subtitle from '@components/shared/Subtitle';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import ExpandableButton from '@components/shared/ExpandableButton';

const CURRENT_SECTION = 'projects';
const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_projects']";
const SUBTITLE_GLOW_CLASSNAME = "before:content-['project_x']";

export default function Projects() {
  const t = useText();

  return (
    <Section currentSection={CURRENT_SECTION}>
      <Title
        label={t('mainTitle', projects)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Subtitle
            label='This Webpage'
            labelGlowText="before:content-['This_Webpage']"
          />
          <ExpandableButton alternativeLabel="This webpage is a personal just for fun project I've made for myself as a hobby" />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ExpandableButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ExpandableButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    </Section>
  );
}
