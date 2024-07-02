import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import about from '@i18nEn/about.json';
import ContactMeButton from '@components/shared/ContactMeButton';
import { ClickToOpenButton } from '@components/shared/ClickToOpenButton';

const CURRENT_SECTION = 'about';
const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['lorem_ipsum_dolor']";
const SUBTITLE_GLOW_CLASSNAME = "before:content-['lorem_ipsum_dolor']";

export default function About() {
  const t = useText();

  return (
    <>
      <Section
        className='gap-10'
        backgroundClassName='bg-left-top'
        currentSection={CURRENT_SECTION}
      >
        <Title
          component='h1'
          label={t('mainTitle', about)}
          labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
          topLabel={t('topLabel', about)}
          bottomLabel={t('bottomLabel', about)}
          border
          className='relative mt-8 sm:mt-0 w-fit h-16 sm:h-24 md:h-[6.5rem] lg:h-28 xl:h-32 2xl:h-36'
        />

        <Title
          label={t('subtitle', about)}
          labelGlowText={SUBTITLE_GLOW_CLASSNAME}
        />
        <ClickToOpenButton
          openSizeClassName='data-[open=true]:w-3/4 data-[open=true]:h-[40%] data-[open=true]:lg:h-1/3'
          alternativeLabel={t('alternativeLabel', about)}
        />

        <ContactMeButton />
      </Section>
    </>
  );
}
