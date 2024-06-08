'use client';

import type { AlternatingButtonsProps } from '@constants/interfaces';
import { Montserrat } from 'next/font/google';
import { useRef } from 'react';

const montserrat = Montserrat({ subsets: ['latin'] });

export function AlternatingButtons({
  sharedClassName,
  open,
  onClick,
  label,
  alternativeLabel,
}: AlternatingButtonsProps) {
  const clickToOpenButtonRef = useRef(null);
  const windowButtonRef = useRef(null);

  const buttonsClassNames =
    'standard-transition size-full absolute top-0 bottom-0 left-0 right-0 my-auto overflow-hidden';
  const disabledButtonsClassName =
    'opacity-0 pointer-events-none select-none h-0 border-y border-white';

  const handleTransitionEnd = (refVal: HTMLButtonElement) => {
    refVal.focus();
    refVal.removeEventListener('transitionend', () =>
      handleTransitionEnd(refVal)
    );
  };

  return (
    <>
      <button
        ref={clickToOpenButtonRef}
        className={`md:leading-[3rem] lg:leading-[5rem] ${buttonsClassNames} ${
          !open ? 'delay-1000' : disabledButtonsClassName
        } ${sharedClassName}`}
        disabled={open}
        aria-hidden={open}
        aria-label={label}
        type='button'
        onClick={() => {
          const currentWindowButton =
            windowButtonRef.current as unknown as HTMLButtonElement;

          currentWindowButton.addEventListener('transitionend', () =>
            handleTransitionEnd(currentWindowButton)
          );
          onClick?.();
        }}
      >
        {label}
      </button>
      <button
        ref={windowButtonRef}
        className={`${buttonsClassNames} ${
          !open ? disabledButtonsClassName : 'delay-1000 bg-black/30'
        } ${
          montserrat.className
        } p-2 md:p-10 lg:p-14 text-base md:text-xl 2xl:text-2xl`}
        disabled={!open}
        aria-hidden={!open}
        aria-label={`Clickable button you can click at any point to stop the reading, and go back to the "Click to Open" button. ${alternativeLabel}`}
        type='button'
        onClick={() => {
          const currentClickToOpenButton =
            clickToOpenButtonRef.current as unknown as HTMLButtonElement;

          currentClickToOpenButton.addEventListener('transitionend', () =>
            handleTransitionEnd(currentClickToOpenButton)
          );

          onClick?.();
        }}
      >
        {alternativeLabel}
      </button>
    </>
  );
}
