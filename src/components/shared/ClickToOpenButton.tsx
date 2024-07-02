'use client';

import type { ClickToOpenButtonProps } from '@constants/interfaces';
import { useState } from 'react';
import clickToOpenButtonText from '@i18nEn/clickToOpenButton.json';
import { useText } from '@hooks/useText';
import { AlternatingButtons } from '@components/shared/title/AlternatingButtons';
import AboutTargetIcon from '@components/shared/title/AboutTargetIcon';

const CLICK_TO_OPEN_GLOW_CLASSNAME = "before:content-['click_to_open']";

export function ClickToOpenButton({
  alternativeLabel,
}: ClickToOpenButtonProps) {
  const t = useText();
  const [isTitleButtonOpen, setIsTitleButtonOpen] = useState(false);

  return (
    <div
      data-open={isTitleButtonOpen}
      className='group transition-1000 z-10 relative w-24 h-20 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 data-[open=true]:w-3/5 data-[open=true]:h-4/6 data-[open=true]:lg:h-3/6 border sm:border-2 md:border-[0.188rem] border-transparent data-[open=true]:border-title-purple'
    >
      <AboutTargetIcon open={!!isTitleButtonOpen} />

      <AlternatingButtons
        className={CLICK_TO_OPEN_GLOW_CLASSNAME}
        open={isTitleButtonOpen}
        onClick={() => setIsTitleButtonOpen((prevValue) => !prevValue)}
        label={t('clickToOpen', clickToOpenButtonText)}
        alternativeLabel={alternativeLabel}
      />

      <AboutTargetIcon bottom open={!!isTitleButtonOpen} />
    </div>
  );
}
