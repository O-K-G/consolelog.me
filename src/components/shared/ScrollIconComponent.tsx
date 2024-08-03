import { useTranslations } from 'next-intl';
import FixedBottomComponent from '@components/shared/FixedBottomComponent';
import DoubleArrowIcon from '@components/icons/DoubleArrowIcon';

export default function ScrollIconComponent() {
  const t = useTranslations('scrollIconText');

  return (
    <FixedBottomComponent
      label={t('scroll')}
      slot={
        <DoubleArrowIcon className='h-5 md:h-7 lg:h-[1.8rem] fill-title-purple' />
      }
    />
  );
}
