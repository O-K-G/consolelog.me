/* eslint-disable multiline-ternary */

import type {
  AlternatingButtonsProps,
  BorderProps,
  TitleProps,
} from '@constants/interfaces';
import AboutTargetIcon from '@components/AboutTargetIcon';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

function Border({ leftLabel, label }: BorderProps) {
  return (
    <div className='w-full h-2.5 sm:h-3 md:h-3.5 lg:h-4 xl:h-4.5 2xl:h-5'>
      <div
        className={`text-title-purple relative size-full flex items-center gap-4 justify-between ${
          leftLabel ? 'flex-row-reverse' : ''
        }`}
      >
        <div className='relative size-full'>
          <div className='border sm:border-2 border-title-purple size-full before:border before:sm:border-2 before:absolute before:top-0 before:-left-[0.05rem] before:bottom-0 before:right-0 before:m-auto before:border-title-purple before:h-[110%] before:w-[101%] lg:before:w-[100.5%] before:blur-[0.125rem]' />
        </div>
        {label && (
          <span className='text-sm z-10 sm:text-base md:text-lg lg:text-xl xl:text-[1.5rem] xl:leading-8 2xl:text-3xl pt-[0.120rem] font-star-date-81316 uppercase whitespace-nowrap'>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

function AlternatingButtons({
  sharedClassName,
  open,
  onClick,
  label,
  alternativeLabel,
}: AlternatingButtonsProps) {
  const buttonsClassNames =
    'standard-transition size-full absolute top-0 bottom-0 left-0 right-0 my-auto overflow-hidden';
  const disabledButtonsClassName =
    'opacity-0 pointer-events-none select-none h-0 border-y border-white';

  return (
    <>
      <button
        className={`md:leading-[3rem] lg:leading-[5rem] ${buttonsClassNames} ${
          !open ? 'delay-1000' : disabledButtonsClassName
        } ${sharedClassName}`}
        disabled={open}
        aria-hidden={open}
        type='button'
        onClick={onClick}
      >
        {label}
      </button>
      <button
        className={`${buttonsClassNames} ${
          !open ? disabledButtonsClassName : 'delay-1000 bg-black/30'
        } ${
          montserrat.className
        } p-2 md:p-10 lg:p-14 text-base md:text-xl 2xl:text-2xl`}
        disabled={!open}
        aria-hidden={!open}
        type='button'
        onClick={onClick}
      >
        {alternativeLabel}
      </button>
    </>
  );
}

export default function Title({
  open,
  onClick,
  component: Component = 'h2',
  isButton,
  label,
  labelGlowText,
  className = 'w-fit h-16 sm:h-24 md:h-[6.5rem] lg:h-28 xl:h-32 2xl:h-36',
  topLabel,
  bottomLabel,
  border = false,
  alternativeLabel,
}: TitleProps) {
  const containerClassName = !isButton
    ? ''
    : 'border-transparent z-10 standard-transition';

  const componentClassName = !isButton
    ? 'title-text-stroke-purple'
    : 'title-text-stroke-white';

  const sharedClassName = `uppercase before:uppercase before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:pointer-events-none before:select-none before:size-full before:center-elements before:flex-wrap before:blur-[0.09rem] lg:before:blur-[0.125rem] before:text-transparent center-elements flex-wrap text-transparent size-full before:title-text-stroke-purple ${componentClassName} ${labelGlowText}`;

  return (
    <div
      data-open={open}
      className={`flex flex-col items-center justify-between shrink-0 font-just-in-the-firestorm text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl relative ${containerClassName} ${className}`}
    >
      {isButton && <AboutTargetIcon open={!!open} />}
      {border && <Border label={topLabel} />}
      {!isButton ? (
        <Component className={`relative ${sharedClassName}`}>{label}</Component>
      ) : (
        <AlternatingButtons
          sharedClassName={sharedClassName}
          open={open}
          onClick={onClick}
          label={label}
          alternativeLabel={alternativeLabel}
        />
      )}
      {border && <Border leftLabel label={bottomLabel} />}
      {isButton && <AboutTargetIcon bottom open={!!open} />}
    </div>
  );
}
