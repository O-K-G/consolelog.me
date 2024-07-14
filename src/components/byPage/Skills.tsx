import Section from '@components/shared/Section';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';
import SkillsList from '@components/SkillsList';
import SideLinks from '@components/shared/SideLinks';
import NewTitle from '@components/shared/title/NewTitle';

const CURRENT_SECTION = 'skills';

export default function Skills() {
  const t = useText();

  return (
    <Section
      className='relative min-h-screen h-auto lg:h-auto pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <NewTitle border>{t('mainTitle', skills)}</NewTitle>

      <NewTitle variant='subtitle'>{t('subtitle', skills)}</NewTitle>

      <SkillsList />
      <SideLinks />
    </Section>
  );
}
