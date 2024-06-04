/* eslint-disable multiline-ternary */

import type { TitleProps } from '@constants/interfaces';

interface BorderProps {
  top?: boolean;
  bottom?: boolean;
  label?: string;
}

function Border({ top, bottom, label }: BorderProps) {
  return (
    <div
      className={`absolute left-0 h-4 w-full my-2 ${top ? 'top-0' : ''} ${
        bottom ? 'bottom-0' : ''
      }`}
    >
      <span
        className={`text-title-purple relative size-full flex items-center gap-4 justify-between ${
          bottom ? 'flex-row-reverse' : ''
        }`}
      >
        <span className='relative size-full'>
          <span className='before:absolute before:border-2 before:border-title-purple size-full before:size-full before:blur-sm border-2 border-title-purple absolute top-0 left-0' />
        </span>
        {label && (
          <span className='text-[1.5rem] leading-7 font-star-date-81316 uppercase whitespace-nowrap'>
            {label}
          </span>
        )}
      </span>
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
  className = 'lg:w-2/4 lg:h-32',
  topLabel,
  bottomLabel,
  border = true,
}: TitleProps) {
  const containerClassName = !isButton
    ? ''
    : 'border-transparent data-[open=true]:size-1/2 border-[0.188rem] data-[open=true]:border-title-purple data-[open=true]:bg-black/30 z-10 transition-all duration-1000 ease-in-out';

  const componentClassName = !isButton
    ? 'title-text-stroke-purple before:title-text-stroke-purple'
    : 'title-text-stroke-white before:title-text-stroke-white';

  const sharedClassName = `before:absolute before:top-0 before:left-0 before:size-full before:center-elements before:flex-wrap before:blur-sm before:text-transparent center-elements flex-wrap text-transparent absolute top-0 left-0 size-full ${componentClassName} ${labelGlowText}`;

  return (
    <div
      data-open={open}
      className={`lowercase font-just-in-the-firestorm text-2xl lg:text-4xl relative center-elements overflow-hidden ${containerClassName} ${className}`}
    >
      {border && <Border top label={topLabel} />}
      {!isButton ? (
        <Component className={sharedClassName}>{label}</Component>
      ) : (
        <button onClick={onClick} type='button' className={sharedClassName}>
          {label}
        </button>
      )}
      {border && <Border bottom label={bottomLabel} />}
    </div>
  );
}
