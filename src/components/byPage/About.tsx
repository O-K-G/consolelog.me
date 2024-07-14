import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import about from '@i18nEn/about.json';
import ExpandableButton from '@components/shared/ExpandableButton';
import NewTitle from '@components/shared/title/NewTitle';

const CURRENT_SECTION = 'about';
const SUBTITLE_GLOW_CLASSNAME = "before:content-['lorem_ipsum_dolor']";

export default function About() {
  const t = useText();

  return (
    <Section
      className='relative min-h-screen h-svh lg:h-dvh gap-10 pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <header className='mt-8 sm:mt-0'>
        {/* <Title
          component='h1'
          label={t('mainTitle', about)}
          labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
          topLabel={t('topLabel', about)}
          bottomLabel={t('bottomLabel', about)}
          border
          className='relative w-fit h-16 sm:h-24 md:h-[6.5rem] lg:h-28 xl:h-32 2xl:h-36'
        /> */}

        <NewTitle border>{t('mainTitle', about)}</NewTitle>
      </header>

      <Title
        label={t('subtitle', about)}
        labelGlowText={SUBTITLE_GLOW_CLASSNAME}
      />

      <ExpandableButton alternativeLabel={t('alternativeLabel', about)} />
    </Section>
  );
}
