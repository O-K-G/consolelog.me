import type { IconsProps } from '@constants/interfaces';

export default function AlignLeftIcon({ className }: IconsProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      className={`shrink-0 ${className}`}
    >
      <path d='M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z' />
    </svg>
  );
}
