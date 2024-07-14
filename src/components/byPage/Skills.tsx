import Section from '@components/shared/Section';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';
import SkillsList from '@components/SkillsList';
import Subtitle from '@components/shared/Subtitle';
import SideLinks from '@components/shared/SideLinks';
import NewTitle from '@components/shared/title/NewTitle';

const CURRENT_SECTION = 'skills';
const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

export default function Skills() {
  const t = useText();

  return (
    <Section
      className='relative min-h-screen h-auto lg:h-auto pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <NewTitle border>{t('mainTitle', skills)}</NewTitle>

      <Subtitle
        label={t('subtitle', skills)}
        labelGlowText={SUBTITLE_GLOW_CLASSNAME}
      />

      <SkillsList />
      <SideLinks />
    </Section>
  );
}
