import type { AlternatingButtonsProps } from '@constants/interfaces';

const ARIA_LABEL_COLLAPSED = 'collapsed -';
const ARIA_LABEL_EXPANDED = 'Button expanded -';

export function AlternatingButtons({
  className,
  open,
  onClick,
  label,
  alternativeLabel,
}: AlternatingButtonsProps) {
  const buttonsClassNames =
    'transition-1000 center-elements size-full absolute top-0 bottom-0 left-0 right-0 my-auto overflow-hidden outline-none';
  const disabledButtonsClassName =
    'opacity-0 pointer-events-none select-none h-0 border-y border-white';

  return (
    <>
      <button
        className={`font-just-in-the-firestorm text-base sm:text-2xl md:text-3xl uppercase text-center before:uppercase before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:pointer-events-none before:select-none before:size-full before:center-elements before:flex-wrap center-elements flex-wrap text-transparent before:text-transparent before:title-text-stroke-purple title-text-stroke-white before:blur-[0.09rem] lg:before:blur-[0.125rem] md:leading-[3rem] lg:leading-[5rem] ${buttonsClassNames} ${
          !open
            ? 'delay-1000 after:-z-10 after:delay-0 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:m-auto after:size-[4.5rem] after:sm:size-[6.5rem] after:md:size-[7.5rem] after:lg:size-[9.5rem] after:rounded-full after:focus:bg-black/30 after:duration-300'
            : disabledButtonsClassName
        } ${className}`}
        aria-label={`${ARIA_LABEL_COLLAPSED} ${label}`}
        aria-hidden={open}
        disabled={open}
        type='button'
        onClick={onClick}
      >
        {label}
      </button>
      <button
        className={`font-montserrat ${buttonsClassNames} ${
          !open
            ? disabledButtonsClassName
            : 'delay-1000 before:delay-0 before:size-full before:absolute before:bg-black/30 before:focus:bg-black/70 before:-z-10 before:top-0 before:left-0 before:duration-300'
        } p-0.5 sm:p-2 md:p-10 lg:p-14 text-sm sm:text-base md:text-xl 2xl:text-2xl`}
        disabled={!open}
        aria-hidden={!open}
        type='button'
        onClick={onClick}
      >
        {alternativeLabel}
      </button>
      <div aria-live='assertive' className='sr-only'>
        {open && `${ARIA_LABEL_EXPANDED} ${alternativeLabel}`}
      </div>
    </>
  );
}
