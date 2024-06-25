import type { ScrollableSubsectionProps } from '@constants/interfaces';
import useHandleSidescroll from '@/hooks/useHandleSidescroll';
import ArrowrightIcon from '@components/ArrowRightIcon';
import IconButton from '@components/shared/IconButton';

const BUTTONS_CLASSNAME =
  'h-1/6 absolute top-0 bottom-0 my-auto disabled:opacity-30';

const ICONS_CLASSNAME = {
  fillClassName:
    'fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple',
  strokeClassName:
    'stroke-title-purple group-hover:stroke-white group-active:stroke-[#75629f] group-focus:stroke-title-purple',
};

export default function ScrollableSubsection({
  children,
  childrenRefsArray,
}: ScrollableSubsectionProps) {
  const handleSidescroll = useHandleSidescroll({ childrenRefsArray });

  return (
    <div className='z-10 relative size-full center-elements'>
      <IconButton
        onClick={() => handleSidescroll(false)}
        className={`${BUTTONS_CLASSNAME} left-0 rotate-180`}
        aria-label='Scroll left'
        icon={<ArrowrightIcon {...ICONS_CLASSNAME} />}
      />

      <div className='hide-scrollbars size-full flex items-center justify-start overflow-y-hidden overflow-x-auto'>
        {children}
      </div>

      <IconButton
        onClick={() => handleSidescroll(true)}
        className={`${BUTTONS_CLASSNAME} right-0`}
        aria-label='Scroll right'
        icon={<ArrowrightIcon {...ICONS_CLASSNAME} />}
      />
    </div>
  );
}
