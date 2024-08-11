import type { BorderProps } from '@constants/interfaces';

export default function Border({
  className = '',
  leftLabel,
  rightLabel,
}: BorderProps) {
  return (
    <div
      data-reverse={!!leftLabel}
      className='z-10 px-[0.385rem] data-[reverse=true]:flex-row-reverse uppercase h-3 sm:h-3.5 md:h-4 lg:h-5 leading-none center-elements whitespace-nowrap gap-3 w-full text-sm sm:text-base md:text-lg lg:text-2xl text-title-purple'
    >
      <div
        className={`size-full border-[1.5px] border-title-purple drop-shadow-border-purple-glow ${className}`}
      />
      {(rightLabel ?? leftLabel) && (
        <span className='border-font-classNames'>
          {rightLabel ?? leftLabel}
        </span>
      )}
    </div>
  );
}
