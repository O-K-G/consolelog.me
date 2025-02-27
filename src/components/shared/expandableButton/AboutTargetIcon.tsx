import { AboutTargetIconProps } from '@constants/interfaces';

export default function AboutTargetIcon({
  bottom,
  open,
}: AboutTargetIconProps) {
  const className = !bottom
    ? '-top-5 ltr:-left-5 rtl:-right-5 rtl:rotate-90'
    : '-bottom-5 ltr:-right-5 rtl:-left-5 ltr:rotate-180 rtl:rotate-270';

  return (
    <div
      data-open={open}
      className={`group absolute overflow-hidden w-[1.9185rem] h-[1.702rem] md:w-[3.837rem] md:h-[3.404rem] data-[open=false]:drop-shadow-purple-glow-sm data-[open=true]:drop-shadow-white-glow-sm ${className}`}
    >
      <div
        data-open={open}
        className="data-[open=false]:before:bg-white data-[open=false]:border-white data-[open=false]:after:bg-white data-[open=true]:before:bg-title-purple data-[open=true]:border-title-purple data-[open=true]:after:bg-title-purple transition-1000 before:transition-1000 after:transition-1000 group-hover:before:bg-orange-300 group-active:before:bg-red-400 before:w-0.5 md:before:w-1 before:h-2 before:absolute before:-top-2 before:right-0 border-double border-t-[6px] border-l-[6px] md:border-t-8 md:border-l-8 group-hover:border-orange-300 group-active:border-red-400 size-full relative group-hover:after:bg-orange-300 group-active:after:bg-red-400 after:w-2 after:h-0.5 md:after:h-1 after:absolute after:bottom-0 after:-left-2"
      />
    </div>
  );
}
