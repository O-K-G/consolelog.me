import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_skills']";

export default function Skills() {
  const t = useText();

  return (
    <Section backgroundClassName='bg-center' currentSection='skills'>
      <Title
        label={t('mainTitle', skills)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />
    </Section>
  );
}
