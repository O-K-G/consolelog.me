import ScrollIcon from '@components/icons/ScrollIcon';
import { useText } from '@hooks/useText';
import scrollIconText from '@i18nEn/scrollIconText.json';
import FixedBottomComponent from '@components/shared/FixedBottomComponent';

export default function ScrollIconComponent() {
  const t = useText();

  return (
    <FixedBottomComponent
      className='right-0 mr-4'
      label={t('scroll', scrollIconText)}
      slot={
        <ScrollIcon className='h-full stroke-title-purple fill-title-purple' />
      }
    />
  );
}
