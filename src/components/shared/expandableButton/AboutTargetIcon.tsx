import type { AboutTargetIconProps } from '@constants/interfaces';

export default function AboutTargetIcon({
  bottom,
  open,
}: AboutTargetIconProps) {
  const className = !bottom
    ? '-top-5 -left-5'
    : '-bottom-5 -right-5 rotate-180';

  return (
    <div
      className={`group absolute overflow-hidden w-[1.9185rem] h-[1.702rem] md:w-[3.837rem] md:h-[3.404rem] ${className} ${
        !open ? 'drop-shadow-purple-glow-sm' : 'drop-shadow-white-glow-sm'
      }`}
    >
      <div
        className={`transition-1000 before:transition-1000 after:transition-1000 group-hover:before:bg-orange-300 group-active:before:bg-red-400 before:w-0.5 before:md:w-1 before:h-2 before:absolute before:-top-2 before:right-0 border-double border-t-[6px] border-l-[6px] md:border-t-8 md:border-l-8 group-hover:border-orange-300 group-active:border-red-400 size-full relative group-hover:after:bg-orange-300 group-active:after:bg-red-400 after:w-2 after:h-0.5 after:md:h-1 after:absolute after:bottom-0 after:-left-2 ${
          !open
            ? 'before:bg-white border-white after:bg-white'
            : 'before:bg-title-purple border-title-purple after:bg-title-purple'
        }`}
      />
    </div>
  );
}
