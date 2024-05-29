import type { TitleProps } from '@constants/interfaces';

export default function Title({
  component: Component = 'h2',
  label,
}: TitleProps) {
  return (
    <div className='relative'>
      <div
        aria-hidden
        className='select-none pointer-events-none title-text blur-sm title-text-stroke scale-[1.05]'
      >
        A
      </div>
      <Component className='title-text title-text-stroke'>A</Component>
    </div>
  );
}
