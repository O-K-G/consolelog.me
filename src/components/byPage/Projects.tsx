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
    <Section
      className='min-h-[46.875rem] relative h-svh lg:h-dvh pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <Title border>{t('mainTitle')}</Title>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Title variant='subtitle' subtitleFontClassName='font-bebas-neue'>
            {t('thisLandingPageTitle')}
          </Title>
          <ExpandableButton
            alternativeLabel={t('thisLandingPageDescription')}
          />
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
