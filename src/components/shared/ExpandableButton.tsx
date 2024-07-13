'use client';

import { useRef, useState } from 'react';
import AboutTargetIcon from '@components/shared/title/AboutTargetIcon';
import type { ExpandableButtonProps } from '@constants/interfaces';
import expandableButtonText from '@i18nEn/expandableButtonText.json';
import { useText } from '@hooks/useText';

export default function ExpandableButton({
  alternativeLabel,
}: ExpandableButtonProps) {
  const [open, setOpen] = useState(false);
  const [isAnimationEnd, setAnimationEnd] = useState(true);
  const t = useText();
  const buttonRef = useRef(null);

  const handleTextAnimation = () => {
    setAnimationEnd(true);
    (buttonRef.current as unknown as HTMLButtonElement).removeEventListener(
      'animationend',
      handleTextAnimation
    );
  };

  return (
    <div className='z-10 container-type-size p-6 size-full relative max-h-[80%] center-elements'>
      <div
        data-open={open}
        className='transition-1000 group relative max-h-full center-elements w-1/2 h-[50cqw] lg:w-1/4 lg:h-[25cqw] data-[open=true]:expandable-button-size-container'
      >
        <AboutTargetIcon open={open} />
        <button
          ref={buttonRef}
          aria-label={
            !open ? t('clickToOpen', expandableButtonText) : alternativeLabel
          }
          aria-expanded={open}
          data-open={open}
          className={`transition-300 border-x border-transparent outline-none overflow-x-hidden overflow-y-auto size-full data-[open=false]:closed-expandable-button data-[open=false]:closed-expandable-button-focus data-[open=true]:opened-expandable-button ${
            !isAnimationEnd ? '' : 'data-[open=true]:border-white'
          }`}
          type='button'
          onClick={() => {
            setOpen((prevValue) => !prevValue);
            setAnimationEnd(false);
            (
              buttonRef.current as unknown as HTMLButtonElement
            ).addEventListener('animationend', handleTextAnimation);
          }}
        >
          {isAnimationEnd && !open && t('clickToOpen', expandableButtonText)}
          {isAnimationEnd && open && alternativeLabel}
        </button>
        <AboutTargetIcon bottom open={open} />
      </div>
    </div>
  );
}
