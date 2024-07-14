'use client';

import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import projects from '@i18nEn/projects.json';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import ExpandableButton from '@components/shared/expandableButton/ExpandableButton';
import Title from '@components/shared/title/Title';

const CURRENT_SECTION = 'projects';

export default function Projects() {
  const t = useText();

  return (
    <Section currentSection={CURRENT_SECTION}>
      <Title border>{t('mainTitle', projects)}</Title>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Title variant='subtitle'>This Webpage</Title>
          <ExpandableButton alternativeLabel="This webpage is a personal just for fun project I've made for myself as a hobby" />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle', projects)}</Title>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle', projects)}</Title>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    </Section>
  );
}
