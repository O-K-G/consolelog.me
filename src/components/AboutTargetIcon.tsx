import type {
  AboutTargetIconProps,
  SVG90DegreesProps,
} from '@constants/interfaces';

function SVG90Degrees({ className, pathClassName }: SVG90DegreesProps) {
  return (
    <svg
      viewBox='0 0 64 57'
      className={`standard-transition w-16 h-[3.563rem] fill-none absolute -z-10 ${className}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1 1V55.4688H10.7351V10.7073H62.3854V1H1Z'
        className={`standard-transition stroke-2 ${pathClassName}`}
      />
    </svg>
  );
}

export default function AboutTargetIcon({
  open,
  bottom,
}: AboutTargetIconProps) {
  const className = !bottom
    ? '-top-5 -left-5'
    : '-bottom-5 -right-5 rotate-180';

  return (
    <>
      <SVG90Degrees
        className={className}
        pathClassName={`${!open ? 'stroke-white' : 'stroke-title-purple'}`}
      />
      <SVG90Degrees
        className={`${!open ? '' : 'opacity-0'} ${className}`}
        pathClassName='stroke-title-purple blur-[0.125rem]'
      />
    </>
  );
}
