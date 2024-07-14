import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';
import SkillsList from '@components/SkillsList';
import Subtitle from '@components/shared/Subtitle';
import SideLinks from '@components/shared/SideLinks';

const CURRENT_SECTION = 'skills';
const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_skills']";
const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

export default function Skills() {
  const t = useText();

  return (
    <Section
      className='relative min-h-screen h-auto lg:h-auto'
      currentSection={CURRENT_SECTION}
    >
      <Title
        label={t('mainTitle', skills)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />

      <Subtitle
        label={t('subtitle', skills)}
        labelGlowText={SUBTITLE_GLOW_CLASSNAME}
      />

      <SkillsList />
      <SideLinks />
    </Section>
  );
}
