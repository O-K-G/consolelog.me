import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';
import SkillsList from '@components/SkillsList';
import Subtitle from '@components/shared/Subtitle';
import SideLinks from '@components/shared/SideLinks';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_skills']";
const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

export default function Skills() {
  const t = useText();

  return (
    <Section
      defaultHeight='min-h-svh lg:min-h-dvh'
      backgroundClassName='bg-center'
      currentSection='skills'
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
