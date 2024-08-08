'use client';

import Section from '@components/shared/Section';
import { useTranslations } from 'next-intl';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import ExpandableButton from '@components/shared/expandableButton/ExpandableButton';
import Title from '@components/shared/title/Title';

const CURRENT_SECTION = 'projects';

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <Section currentSection={CURRENT_SECTION}>
      <Title border>{t('mainTitle')}</Title>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Title variant='subtitle' subtitleFont='font-bebas-neue'>
            This Webpage
          </Title>
          <ExpandableButton alternativeLabel="This webpage is a personal just for fun project I've made for myself as a hobby" />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle')}</Title>
          <ExpandableButton alternativeLabel={t('alternativeLabel')} />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle')}</Title>
          <ExpandableButton alternativeLabel={t('alternativeLabel')} />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    </Section>
  );
}
