/* eslint-disable multiline-ternary */

import type { TitleProps } from '@constants/interfaces';
import AboutTargetIcon from './AboutTargetIcon';

interface BorderProps {
  top?: boolean;
  bottom?: boolean;
  label?: string;
}

function Border({ top, bottom, label }: BorderProps) {
  return (
    <div
      className={`absolute left-0 w-full h-4 my-2 ${top ? 'top-0' : ''} ${
        bottom ? 'bottom-0' : ''
      }`}
    >
      <div
        className={`text-title-purple relative size-full flex items-center gap-4 justify-between ${
          bottom ? 'flex-row-reverse' : ''
        }`}
      >
        <div className='relative size-full'>
          <div className='border-2 border-title-purple size-full before:border-2 before:absolute before:top-0 before:-left-[0.05rem] before:bottom-0 before:right-0 before:m-auto before:border-title-purple before:h-[110%] before:w-[100.5%] before:blur-[0.125rem]' />
        </div>
        {label && (
          <span className='text-base z-10 lg:text-[1.5rem] lg:leading-7 pt-[0.120rem] font-star-date-81316 uppercase whitespace-nowrap'>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Title({
  open,
  onClick,
  component: Component = 'h2',
  isButton,
  label,
  labelGlowText,
  className = 'w-full max-w-[18rem] sm:max-w-[21rem] h-20 lg:h-36 lg:max-w-[32rem]',
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

  const sharedClassName = `lowercase before:lowercase before:absolute before:top-0 before:left-0 before:pointer-events-none before:select-none before:size-full before:center-elements before:flex-wrap before:blur-[0.125rem] before:text-transparent center-elements flex-wrap text-transparent absolute top-0 left-0 size-full before:title-text-stroke-purple ${componentClassName} ${labelGlowText}`;

  return (
    <div
      data-open={open}
      className={`shrink-0 font-just-in-the-firestorm text-xl sm:text-2xl lg:text-4xl relative center-elements ${containerClassName} ${className}`}
    >
      {isButton && <AboutTargetIcon open={!!open} />}
      {border && <Border top label={topLabel} />}
      {!isButton ? (
        <Component className={sharedClassName}>{label}</Component>
      ) : (
        <button onClick={onClick} type='button'>
          {/* TODO: Consider an event listener for the transition, to remove/return the element from/to the DOM completely. */}
          <div
            aria-hidden={open}
            className={`standard-transition ${
              !open ? '' : 'opacity-0'
            } ${sharedClassName}`}
          >
            {label}
          </div>
          <div
            aria-hidden={!open}
            className={`standard-transition text-base ${
              !open ? 'opacity-0' : ''
            } `}
          >
            {alternativeLabel}
          </div>
        </button>
      )}
      {border && <Border bottom label={bottomLabel} />}
      {isButton && <AboutTargetIcon bottom open={!!open} />}
    </div>
  );
}
