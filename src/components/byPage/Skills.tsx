import Section from '@components/shared/Section';
import { useTranslations } from 'next-intl';
import SkillsList from '@components/SkillsList';
import SideLinks from '@components/shared/SideLinks';
import Title from '@components/shared/title/Title';

const CURRENT_SECTION = 'skills';

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <Section
      className='relative min-h-screen h-[200svh] lg:h-[200dvh] pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <Title
        className='animate-skills animate-view-polyfill fixed top-[110vh] animate-skills-1 animate-skills-1-polyfill'
        border
      >
        {t('mainTitle')}
      </Title>
      <Title
        className='animate-skills animate-view-polyfill fixed top-[110vh] animate-skills-2 animate-skills-2-polyfill'
        variant='subtitle'
      >
        {t('subtitle')}
      </Title>
      <SkillsList />

      <SideLinks />
    </Section>
  );
}
