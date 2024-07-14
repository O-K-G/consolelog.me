'use client';

import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import projects from '@i18nEn/projects.json';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import ExpandableButton from '@components/shared/ExpandableButton';
import NewTitle from '@components/shared/title/NewTitle';

const CURRENT_SECTION = 'projects';

export default function Projects() {
  const t = useText();

  return (
    <Section currentSection={CURRENT_SECTION}>
      <NewTitle border>{t('mainTitle', projects)}</NewTitle>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <NewTitle variant='subtitle'>This Webpage</NewTitle>
          <ExpandableButton alternativeLabel="This webpage is a personal just for fun project I've made for myself as a hobby" />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <NewTitle variant='subtitle'>{t('subtitle', projects)}</NewTitle>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <NewTitle variant='subtitle'>{t('subtitle', projects)}</NewTitle>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    </Section>
  );
}
