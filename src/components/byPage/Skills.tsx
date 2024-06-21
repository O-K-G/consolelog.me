import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';
import SkillsList from '@components/SkillsList';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_skills']";
const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

export default function Skills() {
  const t = useText();

  return (
    <Section backgroundClassName='bg-center' currentSection='skills'>
      <Title
        label={t('mainTitle', skills)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />

      <Title
        label={t('subtitle', skills)}
        labelGlowText={SUBTITLE_GLOW_CLASSNAME}
        beforeBlurClassName='before:blur-[0.01rem] lg:before:blur-[2rem]'
        fontClassName='font-bebas-neue'
        textSizeClassName='text-2xl sm:text-3xl lg:text-5xl xl:text-7xl'
        textColorClassName='text-white before:lg:text-title-purple'
        beforeTextStrokeClassName='title-text-stroke-purple-narrow-dark'
      />
      <SkillsList />
    </Section>
  );
}
