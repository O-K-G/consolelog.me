import { useTranslations } from 'next-intl';
import FixedBottomComponent from '@components/shared/FixedBottomComponent';
import DoubleArrowIcon from '@components/icons/DoubleArrowIcon';
import { AppContext as appContext } from '@components/shared/AppContext';
import { useContext } from 'react';

export default function ScrollIconComponent() {
  const t = useTranslations('scrollIconText');
  const { currentTopSection } = useContext(appContext);
  const isAbout = currentTopSection === 'about';

  return (
    <FixedBottomComponent
      isTransparent={!isAbout}
      label={t('scroll')}
      slot={
        <DoubleArrowIcon className='h-5 absolute top-0.5 left-0 right-0 mx-auto animate-scroll-icon md:h-7 lg:h-[1.8rem] fill-title-purple' />
      }
    />
  );
}
