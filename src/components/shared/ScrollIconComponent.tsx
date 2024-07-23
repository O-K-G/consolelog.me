import { useText } from '@hooks/useText';
import scrollIconText from '@i18nEn/scrollIconText.json';
import BottomComponent from '@components/shared/BottomComponent';
import DoubleArrowIcon from '@components/icons/DoubleArrowIcon';

export default function ScrollIconComponent() {
  const t = useText();

  return (
    <BottomComponent
      label={t('scroll', scrollIconText)}
      slot={
        <DoubleArrowIcon className='h-5 md:h-7 lg:h-[1.8rem] stroke-title-purple fill-title-purple' />
      }
    />
  );
}
