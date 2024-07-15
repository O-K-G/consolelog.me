import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import about from '@i18nEn/about.json';
import ExpandableButton from '@components/shared/expandableButton/ExpandableButton';
import Title from '@components/shared/title/Title';

const CURRENT_SECTION = 'about';

export default function About() {
  const t = useText();

  return (
    <Section
      className='relative justify-start min-h-screen h-svh lg:h-dvh gap-10 pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <header className='mt-8 sm:mt-0'>
        <Title
          component='h1'
          border
          topLabel={t('topLabel', about)}
          bottomLabel={t('bottomLabel', about)}
        >
          {t('mainTitle', about)}
        </Title>
      </header>

      <Title>{t('subtitle', about)}</Title>

      <ExpandableButton alternativeLabel={t('alternativeLabel', about)} />
    </Section>
  );
}
