/* eslint-disable multiline-ternary */

import type { TitleProps } from '@constants/interfaces';

export default function Title({
  open,
  onClick,
  component: Component = 'h2',
  isButton,
  label,
  labelGlowText,
}: TitleProps) {
  const containerClassName = !isButton
    ? ''
    : 'w-96 h-36 border border-red-500 data-[open=true]:size-1/2 data-[open=true]:border-[0.188rem] border-title-purple data-[open=true]:bg-black/30 z-10 transition-all duration-1000 ease-in-out';

  const componentClassName = !isButton
    ? 'title-text-stroke-purple before:title-text-stroke-purple'
    : 'title-text-stroke-white before:title-text-stroke-white';

  const sharedClassName = `before:absolute before:top-0 before:left-0 before:size-full before:center-elements before:flex-wrap before:blur-lg before:text-transparent center-elements flex-wrap text-transparent absolute top-0 left-0 size-full ${componentClassName} ${labelGlowText}`;

  return (
    <div
      data-open={open}
      className={`font-just-in-the-firestorm text-4xl relative center-elements overflow-hidden ${containerClassName}`}
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
