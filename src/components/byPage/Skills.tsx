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
      noSectionBackground
      className='relative min-h-screen h-auto lg:h-auto pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <Title border>{t('mainTitle')}</Title>

      <Title variant='subtitle'>{t('subtitle')}</Title>

      <SkillsList />
      <SideLinks />
    </Section>
  );
}
