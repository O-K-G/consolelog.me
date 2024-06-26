import ArrowrightIcon from '@components/ArrowRightIcon';
import IconButton from '@components/shared/IconButton';
import { useRef, type ReactNode, Children } from 'react';

const BUTTONS_CLASSNAME =
  'h-14 lg:h-[6.375rem] absolute top-0 bottom-0 my-auto disabled:opacity-30';

const ICONS_CLASSNAME = {
  fillClassName:
    'fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple',
  strokeClassName:
    'stroke-title-purple group-hover:stroke-white group-active:stroke-[#75629f] group-focus:stroke-title-purple',
};

export function ScrollableSubsectionItem({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='h-full min-w-full center-elements flex-col gap-24'>
      {children}
    </div>
  );
}

export default function ScrollableSubsection({
  children,
}: {
  children: ReactNode;
}) {
  const scrollableRef = useRef(null);
  let clickedTimesNext = 0;

  const handleHorizontalScroll = (num: number) => {
    (scrollableRef.current as unknown as HTMLDivElement).scrollTo({
      top: 0,
      left: num,
      behavior: 'smooth',
    });
  };

  return (
    <div className='z-10 size-full center-elements'>
      <IconButton
        onClick={() => {
          if (clickedTimesNext !== 0) {
            clickedTimesNext -= 1;
            handleHorizontalScroll(window.innerWidth / clickedTimesNext);
          }
        }}
        className={`${BUTTONS_CLASSNAME} left-0 rotate-180 ml-4`}
        aria-label='Scroll left'
        icon={<ArrowrightIcon {...ICONS_CLASSNAME} />}
      />

      <div
        ref={scrollableRef}
        className='hide-scrollbars size-full flex items-center justify-start overflow-y-hidden overflow-x-auto'
      >
        {children}
      </div>

      <IconButton
        onClick={() => {
          if (clickedTimesNext <= Children.count(children) - 1) {
            clickedTimesNext += 1;
            handleHorizontalScroll(window.innerWidth * clickedTimesNext);
          }
        }}
        className={`${BUTTONS_CLASSNAME} right-0 mr-4`}
        aria-label='Scroll right'
        icon={<ArrowrightIcon {...ICONS_CLASSNAME} />}
      />
    </div>
  );
}

ScrollableSubsection.Item = ScrollableSubsectionItem;
