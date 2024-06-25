import type { ScrollableSubsectionProps } from '@constants/interfaces';
import useHandleSidescroll from '@/hooks/useHandleSidescroll';
import ArrowrightIcon from '@components/ArrowRightIcon';
import IconButton from '@components/shared/IconButton';
import { forwardRef, type ForwardedRef, type ReactNode } from 'react';

const BUTTONS_CLASSNAME =
  'h-14 lg:h-[6.375rem] absolute top-0 bottom-0 my-auto disabled:opacity-30';

const ICONS_CLASSNAME = {
  fillClassName:
    'fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple',
  strokeClassName:
    'stroke-title-purple group-hover:stroke-white group-active:stroke-[#75629f] group-focus:stroke-title-purple',
};

function ScrollableSubsectionItem(
  { children }: { children: ReactNode },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className='h-full snap-center min-w-full center-elements flex-col gap-24'
    >
      {children}
    </div>
  );
}

export default function ScrollableSubsection({
  children,
  childrenRefsArray,
}: ScrollableSubsectionProps) {
  const { handleSidescroll, disableLeft, disableRight } = useHandleSidescroll({
    childrenRefsArray,
  });

  return (
    <div className='z-10 size-full center-elements'>
      <IconButton
        disabled={disableLeft}
        onClick={() => handleSidescroll(false)}
        className={`${BUTTONS_CLASSNAME} left-0 rotate-180 ml-4`}
        aria-label='Scroll left'
        icon={<ArrowrightIcon {...ICONS_CLASSNAME} />}
      />

      <div className='hide-scrollbars snap-x snap-mandatory size-full flex items-center justify-start overflow-y-hidden overflow-x-auto'>
        {children}
      </div>

      <IconButton
        disabled={disableRight}
        onClick={() => handleSidescroll(true)}
        className={`${BUTTONS_CLASSNAME} right-0 mr-4`}
        aria-label='Scroll right'
        icon={<ArrowrightIcon {...ICONS_CLASSNAME} />}
      />
    </div>
  );
}

ScrollableSubsection.Item = forwardRef(ScrollableSubsectionItem);
