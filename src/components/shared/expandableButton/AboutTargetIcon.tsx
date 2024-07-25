import type { AboutTargetIconProps } from '@constants/interfaces';

export default function AboutTargetIcon({
  open,
  bottom,
}: AboutTargetIconProps) {
  const className = !bottom
    ? '-top-5 -left-5'
    : '-bottom-5 -right-5 rotate-180';

  return (
    <div
      className={`absolute overflow-hidden w-[3.837rem] h-[3.404rem] ${className}`}
    >
      <div className='before:bg-white before:w-1 before:h-2 before:absolute before:-top-2 before:right-0 border-double border-t-8 border-l-8 border-white size-full relative after:bg-white after:w-2 after:h-1 after:absolute after:bottom-0 after:-left-2' />
    </div>
  );

  // return (
  //   <>
  //     <SVG90Degrees
  //       className={`${!open ? '' : 'opacity-0'} ${className}`}
  //       pathClassName='stroke-title-purple blur-[0.125rem] group-hover:stroke-title-orange group-active:stroke-title-red'
  //     />
  //     <SVG90Degrees
  //       className={className}
  //       pathClassName={`${
  //         !open
  //           ? 'stroke-white group-hover:stroke-title-orange group-active:stroke-title-red'
  //           : 'stroke-title-purple group-hover:stroke-title-orange group-active:stroke-title-red'
  //       }`}
  //     />
  //   </>
  // );
}
