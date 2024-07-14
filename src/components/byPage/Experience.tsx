'use client';

import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import Attribution from '@components/Attribution';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import experience from '@i18nEn/experience.json';
import Shenanigans from '@components/Shenanigans';
import ExpandableButton from '@components/shared/ExpandableButton';
import NewTitle from '@components/shared/title/NewTitle';

const CURRENT_SECTION = 'experience';

export default function Experience() {
  const t = useText();
  return (
    <Section currentSection={CURRENT_SECTION}>
      <NewTitle border>{t('mainTitle', experience)}</NewTitle>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <NewTitle variant='subtitle'>{t('subtitle', experience)}</NewTitle>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <NewTitle variant='subtitle'>{t('subtitle', experience)}</NewTitle>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <NewTitle variant='subtitle'>{t('subtitle', experience)}</NewTitle>
          <ExpandableButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>

      <footer className='mt-auto z-10 center-elements flex-col gap-2'>
        <Attribution />
        <Shenanigans />
      </footer>
    </Section>
  );
}
