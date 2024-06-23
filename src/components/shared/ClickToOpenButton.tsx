import type { ClickToOpenButtonProps } from '@constants/interfaces';
import Title from '@components/shared/title/Title';
import { useState } from 'react';
import clickToOpenButtonText from '@i18nEn/clickToOpenButton.json';
import { useText } from '@hooks/useText';

const CLICK_TO_OPEN_GLOW_CLASSNAME = "before:content-['click_to_open']";

export function ClickToOpenButton({
  alternativeLabel,
}: ClickToOpenButtonProps) {
  const t = useText();
  const [isTitleButtonOpen, setIsTitleButtonOpen] = useState(false);

  return (
    <Title
      alternativeLabel={alternativeLabel}
      label={t('clickToOpen', clickToOpenButtonText)}
      labelGlowText={CLICK_TO_OPEN_GLOW_CLASSNAME}
      alternatingButtonsAriaLabelPrefix={t(
        'alternativeLabelAriaLabel',
        clickToOpenButtonText
      )}
      isButton
      open={isTitleButtonOpen}
      textStrokeClassName='title-text-stroke-white'
      onClick={() => setIsTitleButtonOpen((prevValue) => !prevValue)}
      className='w-24 h-20 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 data-[open=true]:w-3/4 data-[open=true]:h-[40%] data-[open=true]:lg:h-1/3 border sm:border-2 md:border-[0.188rem] data-[open=true]:border-title-purple'
    />
  );
}
