'use client';

import Section from '@components/shared/Section';
import { useTranslations } from 'next-intl';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import ExpandableButton from '@components/shared/expandableButton/ExpandableButton';
import Title from '@components/shared/title/Title';
import Footer from '@components/Footer';

const CURRENT_SECTION = 'experience';

export default function Experience() {
  const t = useTranslations('experience');

  return (
    <Section currentSection={CURRENT_SECTION}>
      <Title border>{t('mainTitle')}</Title>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle')}</Title>
          <ExpandableButton alternativeLabel={t('alternativeLabel')} />
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
      <Footer />
    </Section>
  );
}
