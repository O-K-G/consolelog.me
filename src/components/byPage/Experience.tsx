'use client';

import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import experience from '@i18nEn/experience.json';
import ExpandableButton from '@components/shared/expandableButton/ExpandableButton';
import Title from '@components/shared/title/Title';
import Footer from '@components/Footer';

const CURRENT_SECTION = 'experience';

export default function Experience() {
  const t = useText();

  return (
    <Section currentSection={CURRENT_SECTION}>
      <Title border>{t('mainTitle', experience)}</Title>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle', experience)}</Title>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle', experience)}</Title>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('subtitle', experience)}</Title>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
      <Footer />
    </Section>
  );
}
