import type { BorderProps } from '@constants/interfaces';

export default function Border({
  className,
  leftLabel,
  rightLabel,
}: BorderProps) {
  return (
    <div
      className={`z-10 px-[0.385rem] uppercase h-3 sm:h-3.5 md:h-4 lg:h-5 leading-none center-elements whitespace-nowrap font-star-date-81316 gap-3 w-full text-sm sm:text-base md:text-lg lg:text-2xl text-title-purple ${
        leftLabel ? 'flex-row-reverse' : ''
      }`}
    >
      <div
        className={`h-[72%] mb-[0.05rem] sm:h-[71.5%] sm:mb-[0.1rem] lg:h-3/4 lg:mb-0.5 w-full border-[1.5px] border-title-purple drop-shadow-border-purple-glow ${className}`}
      />
      {rightLabel ?? leftLabel}
    </div>
  );
}
