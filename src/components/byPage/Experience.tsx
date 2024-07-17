'use client';

import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import Attribution from '@components/Attribution';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import experience from '@i18nEn/experience.json';
import Shenanigans from '@components/Shenanigans';
import ExpandableButton from '@components/shared/expandableButton/ExpandableButton';
import Title from '@components/shared/title/Title';
import ScrollToTopComponent from '@components/shared/ScrollToTopComponent';

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

      <ScrollToTopComponent />
      <footer className='mt-auto z-10 center-elements flex-col gap-2'>
        <Attribution />
        <Shenanigans />
      </footer>
    </Section>
  );
}
