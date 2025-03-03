import { BorderProps } from "@constants/interfaces";

export default function Border({
  className = "",
  leftLabel,
  rightLabel,
  isTextBlink,
}: BorderProps) {
  return (
    <div
      data-reverse={!!leftLabel}
      className="px-[0.385rem] data-[reverse=true]:flex-row-reverse uppercase h-3 sm:h-3.5 md:h-4 lg:h-5 leading-none center-elements whitespace-nowrap gap-3 w-full text-sm sm:text-base md:text-lg lg:text-2xl text-title-purple"
    >
      <div
        className={`size-full border-[1.5px] border-title-purple drop-shadow-border-purple-glow ${className}`}
      />
      {(rightLabel ?? leftLabel) && (
        <span
          data-blink={isTextBlink}
          className="border-font-classNames data-[blink=true]:animate-border-subtitle-blink"
        >
          {rightLabel ?? leftLabel}
        </span>
      )}
    </div>
  );
}
