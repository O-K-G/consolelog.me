/* eslint-disable multiline-ternary */

import type { TitleProps } from '@constants/interfaces';
import AboutTargetIcon from '@components/AboutTargetIcon';
import { AlternatingButtons } from '@components/title/AlternatingButtons';
import Border from '@components/title/border';

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
