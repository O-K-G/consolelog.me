'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import Attribution from '@components/Attribution';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import Subtitle from '@components/shared/Subtitle';
import { ClickToOpenButton } from '@components/shared/ClickToOpenButton';
import experience from '@i18nEn/experience.json';
import Shenanigans from '@components/Shenanigans';

const CURRENT_SECTION = 'experience';
const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_work_experience']";
const SUBTITLE_GLOW_CLASSNAME = "before:content-['some_place']";
const SUBTITLE_CLASSNAME =
  'absolute top-0 w-fit h-16 sm:h-24 md:h-[6.5rem] lg:h-28 xl:h-32 2xl:h-36';

export default function Experience() {
  const t = useText();
  return (
    <Section backgroundClassName='bg-top-left' currentSection={CURRENT_SECTION}>
      <Title
        label={t('mainTitle', experience)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          <Subtitle
            className={SUBTITLE_CLASSNAME}
            label={t('subtitle', experience)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            className={SUBTITLE_CLASSNAME}
            label={t('subtitle', experience)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            alternativeLabel={t('alternativeLabel', experience)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            className={SUBTITLE_CLASSNAME}
            label={t('subtitle', experience)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
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
