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
    <Section
      className='min-h-[40rem] relative h-svh lg:h-dvh pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <Title border>{t('mainTitle')}</Title>
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('faiMainTitle')}</Title>
          <ExpandableButton alternativeLabel={t('faiDescription')} />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Title variant='subtitle'>{t('bankMainTitle')}</Title>
          <ExpandableButton alternativeLabel={t('bankMainTitleDescription')} />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
      <Footer />
    </Section>
  );
}
