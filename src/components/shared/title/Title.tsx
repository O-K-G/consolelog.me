import type { TitleProps } from '@constants/interfaces';
import AboutTargetIcon from '@components/shared/title/AboutTargetIcon';
import { AlternatingButtons } from '@components/shared/title/AlternatingButtons';
import Border from '@components/shared/title/border';

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
  alternatingButtonsAriaLabelPrefix,
  beforeBlurClassName = 'before:blur-[0.09rem] lg:before:blur-[0.125rem]',
  fontClassName = 'font-just-in-the-firestorm',
  textSizeClassName = 'text-base sm:text-2xl md:text-3xl lg:text-4xl',
  textColorClassName = 'text-transparent before:text-transparent',
  beforeTextStrokeClassName = 'before:title-text-stroke-purple',
  textStrokeClassName = 'title-text-stroke-purple',
}: TitleProps) {
  const sharedClassName = `z-10 uppercase text-center before:uppercase before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:pointer-events-none before:select-none before:size-full before:center-elements before:flex-wrap center-elements flex-wrap size-full ${beforeTextStrokeClassName} ${textStrokeClassName} ${beforeBlurClassName} ${labelGlowText} ${textColorClassName}`;

  return (
    <div
      data-open={open}
      className={`group flex flex-col items-center justify-between shrink-0 relative ${
        !isButton ? '' : 'border-transparent z-10 transition-1000'
      } ${fontClassName} ${textSizeClassName} ${className}`}
    >
      {isButton && <AboutTargetIcon open={!!open} />}
      {border && <Border label={topLabel} />}
      {!isButton ? (
        <Component
          aria-label={
            topLabel ?? bottomLabel
              ? `${topLabel} - ${label} - ${bottomLabel}`
              : label
          }
          className={`relative ${sharedClassName}`}
        >
          {label}
        </Component>
      ) : (
        <AlternatingButtons
          sharedClassName={sharedClassName}
          open={open}
          onClick={onClick}
          label={label}
          alternativeLabel={alternativeLabel}
          ariaLabelPrefix={alternatingButtonsAriaLabelPrefix}
        />
      )}
      {border && <Border leftLabel label={bottomLabel} />}
      {isButton && <AboutTargetIcon bottom open={!!open} />}
    </div>
  );
}
