import type { IconsProps } from '@constants/interfaces';

export default function ScrollToTopIcon({ className }: IconsProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 -960 960 960'
      fill='none'
      className={className}
    >
      <path d='M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z' />
    </svg>
  );
}