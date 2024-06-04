/* eslint-disable multiline-ternary */

import type { TitleProps } from '@constants/interfaces';

export default function Title({
  open,
  onClick,
  component: Component = 'h2',
  isButton,
  label,
  labelGlowText,
  className = 'lg:w-2/4 lg:h-36',
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
      className={`font-just-in-the-firestorm text-2xl lg:text-4xl relative center-elements overflow-hidden ${containerClassName} ${className}`}
    >
      {!isButton ? (
        <Component className={sharedClassName}>{label}</Component>
      ) : (
        <button onClick={onClick} type='button' className={sharedClassName}>
          {label}
        </button>
      )}
    </div>
  );
}
