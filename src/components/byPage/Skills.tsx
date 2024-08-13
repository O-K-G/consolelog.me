import Section from '@components/shared/Section';
import { useTranslations } from 'next-intl';
import SkillsList from '@components/SkillsList';
import SideLinks from '@components/shared/SideLinks';
import Title from '@components/shared/title/Title';

const CURRENT_SECTION = 'skills';

function Divider({ className }: { className: string }) {
  return (
    <div
      className={`absolute left-0 bg-gradient-to-b from-transparent via-black to-transparent w-full h-24 ${className}`}
    />
  );
}

export default function Skills() {
  const t = useTranslations('skills');

  return (
    <Section
      absoluteBackground
      className='relative min-h-screen h-auto lg:h-auto pt-20 md:pt-40 overflow-clip-margin-10'
      currentSection={CURRENT_SECTION}
    >
      <Divider className='-top-12' />
      <Divider className='-bottom-12 z-10' />
      <Title border>{t('mainTitle')}</Title>

      <Title variant='subtitle'>{t('subtitle')}</Title>

      <SkillsList />
      <SideLinks />
    </Section>
  );
}
