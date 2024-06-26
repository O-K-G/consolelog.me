import ArrowrightIcon from '@components/ArrowRightIcon';
import IconButton from '@components/shared/IconButton';
import { useRef, type ReactNode, Children } from 'react';
import useHandleHorizontalScroll from '@hooks/useHandleHorizontalScroll';

const BUTTONS_CLASSNAME =
  'h-14 lg:h-[6.375rem] absolute top-0 bottom-0 my-auto disabled:opacity-30';

function ArrowIconComponent() {
  return (
    <div className='relative shrink-0 center-elements size-full'>
      <ArrowrightIcon
        fillClassName='fill-black/30'
        strokeClassName='stroke-black/30'
        className='hidden fill-black/30 group-focus:block scale-150 -z-10 absolute m-auto top-0 bottom-0 right-0 left-0 size-full'
      />
      <ArrowrightIcon
        fillClassName='fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple'
        strokeClassName='stroke-title-purple group-hover:stroke-white group-active:stroke-[#75629f] group-focus:stroke-title-purple'
      />
    </div>
  );
}

export function ScrollableSubsectionItem({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='h-full snap-center min-w-full center-elements flex-col gap-24'>
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
  const { handleHorizontalScroll } = useHandleHorizontalScroll();

  return (
    <div className='z-10 size-full center-elements'>
      <IconButton
        onClick={() => {
          if (clickedTimesNext !== 0) {
            clickedTimesNext -= 1;
            handleHorizontalScroll({
              num: window.innerWidth / clickedTimesNext,
              scrollableRef,
            });
          }
        }}
        className={`${BUTTONS_CLASSNAME} left-0 rotate-180 ml-4`}
        aria-label='Scroll left'
        icon={<ArrowIconComponent />}
      />

      <div
        ref={scrollableRef}
        className='hide-scrollbars snap-x snap-mandatory size-full flex items-center justify-start overflow-y-hidden overflow-x-auto'
      >
        {children}
      </div>

      <IconButton
        onClick={() => {
          if (clickedTimesNext < Children.count(children) - 1) {
            clickedTimesNext += 1;
            handleHorizontalScroll({
              num: window.innerWidth * clickedTimesNext,
              scrollableRef,
            });
          }
        }}
        className={`${BUTTONS_CLASSNAME} right-0 mr-4`}
        aria-label='Scroll right'
        icon={<ArrowIconComponent />}
      />
    </div>
  );
}

ScrollableSubsection.Item = ScrollableSubsectionItem;
