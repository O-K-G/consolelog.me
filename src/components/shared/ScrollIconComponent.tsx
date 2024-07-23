import { useText } from '@hooks/useText';
import scrollIconText from '@i18nEn/scrollIconText.json';
import FixedBottomComponent from '@components/shared/FixedBottomComponent';
import DoubleArrowIcon from '@components/icons/DoubleArrowIcon';

export default function ScrollIconComponent() {
  const t = useText();

  return (
    <FixedBottomComponent
      label={t('scroll', scrollIconText)}
      slot={
        <DoubleArrowIcon className='h-5 md:h-7 lg:h-[1.8rem] fill-title-purple' />
      }
    />
  );
}
