import Section from '@components/shared/Section';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';
import SkillsList from '@components/SkillsList';
import SideLinks from '@components/shared/SideLinks';
import Title from '@components/shared/title/Title';

const CURRENT_SECTION = 'skills';

export default function Skills() {
  const t = useText();

  return (
    <Section
      className='relative justify-start min-h-screen h-auto lg:h-auto pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <Title border>{t('mainTitle', skills)}</Title>

      <Title variant='subtitle'>{t('subtitle', skills)}</Title>

      <SkillsList />
      <SideLinks />
    </Section>
  );
}
