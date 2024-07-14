'use client';

import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import projects from '@i18nEn/projects.json';
import Subtitle from '@components/shared/Subtitle';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import ExpandableButton from '@components/shared/ExpandableButton';
import NewTitle from '@components/shared/title/NewTitle';

const CURRENT_SECTION = 'projects';
const SUBTITLE_GLOW_CLASSNAME = "before:content-['project_x']";

export default function Projects() {
  const t = useText();

  return (
    <Section currentSection={CURRENT_SECTION}>
      <NewTitle border>{t('mainTitle', projects)}</NewTitle>
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
