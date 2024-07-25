import type { AboutTargetIconProps } from '@constants/interfaces';

export default function AboutTargetIcon({ bottom }: AboutTargetIconProps) {
  const className = !bottom
    ? '-top-5 -left-5'
    : '-bottom-5 -right-5 rotate-180';

  return (
    <div
      className={`group absolute overflow-hidden drop-shadow-border-purple-glow w-[3.837rem] h-[3.404rem] ${className}`}
    >
      <div className='transition-1000 before:transition-1000 after:transition-1000 group-hover:before:bg-orange-300 group-active:before:bg-red-400 before:bg-white before:w-1 before:h-2 before:absolute before:-top-2 before:right-0 border-double border-t-8 border-l-8 border-white group-hover:border-orange-300 group-active:border-red-400 size-full relative group-hover:after:bg-orange-300 group-active:after:bg-red-400 after:bg-white after:w-2 after:h-1 after:absolute after:bottom-0 after:-left-2' />
    </div>
  );
}
