'use client';

import type { AlternatingButtonsProps } from '@constants/interfaces';

import { useEffect, useRef } from 'react';

export function AlternatingButtons({
  sharedClassName,
  open,
  onClick,
  label,
  alternativeLabel,
  ariaLabelPrefix,
}: AlternatingButtonsProps) {
  const clickToOpenButtonRef = useRef(null);
  const windowButtonRef = useRef(null);

  const buttonsClassNames =
    'transition-1000 center-elements size-full absolute top-0 bottom-0 left-0 right-0 my-auto overflow-hidden outline-none';
  const disabledButtonsClassName =
    'opacity-0 pointer-events-none select-none h-0 border-y border-white';

  useEffect(() => {
    if (open) {
      return (windowButtonRef.current as unknown as HTMLButtonElement).focus();
    }

    return (
      clickToOpenButtonRef.current as unknown as HTMLButtonElement
    ).focus();
  }, [open]);

  return (
    <>
      <button
        ref={clickToOpenButtonRef}
        className={`md:leading-[3rem] lg:leading-[5rem] ${buttonsClassNames} ${
          !open
            ? 'delay-1000 after:-z-10 after:delay-0 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:m-auto after:size-[4.5rem] after:sm:size-[6.5rem] after:md:size-[7.5rem] after:lg:size-[9.5rem] after:rounded-full after:focus:bg-black/30 after:duration-300'
            : disabledButtonsClassName
        } ${sharedClassName}`}
        disabled={open}
        aria-hidden={open}
        aria-label={label}
        type='button'
        onClick={onClick}
      >
        {label}
      </button>
      <button
        ref={windowButtonRef}
        className={`font-montserrat ${buttonsClassNames} ${
          !open
            ? disabledButtonsClassName
            : 'delay-1000 before:delay-0 before:size-full before:absolute before:bg-black/30 before:focus:bg-black/70 before:-z-10 before:top-0 before:left-0 before:duration-300'
        } p-2 md:p-10 lg:p-14 text-sm sm:text-base md:text-xl 2xl:text-2xl`}
        disabled={!open}
        aria-hidden={!open}
        aria-label={`${ariaLabelPrefix} ${alternativeLabel}`}
        type='button'
        onClick={onClick}
      >
        {alternativeLabel}
      </button>
    </>
  );
}
