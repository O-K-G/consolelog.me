import Section from '@components/shared/Section';
import { useText } from '@hooks/useText';
import about from '@i18nEn/about.json';
import ExpandableButton from '@components/shared/ExpandableButton';
import NewTitle from '@components/shared/title/NewTitle';

const CURRENT_SECTION = 'about';

export default function About() {
  const t = useText();

  return (
    <Section
      className='relative min-h-screen h-svh lg:h-dvh gap-10 pt-20 md:pt-40'
      currentSection={CURRENT_SECTION}
    >
      <header className='mt-8 sm:mt-0'>
        <NewTitle
          component='h1'
          border
          topLabel={t('topLabel', about)}
          bottomLabel={t('bottomLabel', about)}
        >
          {t('mainTitle', about)}
        </NewTitle>
      </header>

      <NewTitle>{t('subtitle', about)}</NewTitle>

      <ExpandableButton alternativeLabel={t('alternativeLabel', about)} />
    </Section>
  );
}
