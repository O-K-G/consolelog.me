import ArrowRightIcon from '@components/ArrowRightIcon';
import IconButton from '@components/shared/IconButton';
import {
  useState,
  forwardRef,
  useRef,
  type ReactNode,
  type ForwardedRef,
  type Dispatch,
  type SetStateAction,
} from 'react';
import useHandleHorizontalScroll from '@hooks/useHandleHorizontalScroll';
import useHandleChildrenWithNewProps from '@hooks/useHandleChildrenWithNewProps';
import type { PropsWithId } from '@constants/interfaces';
import useObserveScrollSubsection from '@hooks/useObserveScrollSubsection';

const BUTTONS_CLASSNAME =
  'h-14 lg:h-[6.375rem] absolute top-0 bottom-0 my-auto disabled:opacity-30';

function ArrowIconComponent() {
  return (
    <div className='relative shrink-0 center-elements size-full'>
      <ArrowRightIcon
        fillClassName='fill-black/30'
        strokeClassName='stroke-black/30'
        className='hidden fill-black/30 group-focus:block scale-150 -z-10 absolute m-auto top-0 bottom-0 right-0 left-0 size-full'
      />
      <ArrowRightIcon
        fillClassName='fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple'
        strokeClassName='stroke-title-purple group-hover:stroke-white group-active:stroke-[#75629f] group-focus:stroke-title-purple'
      />
    </div>
  );
}

export const ScrollableSubsectionItem = forwardRef(
  function ScrollableSubsectionItem(
    {
      children,
      onSubsectionSelectChange,
      id,
    }: {
      children: ReactNode;
      onSubsectionSelectChange?: Dispatch<SetStateAction<number>>;
      id?: number;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) {
    const scrollableRef = ref;
    const scrollableItemRef = useRef(null);
    useObserveScrollSubsection({
      id,
      onSubsectionSelectChange,
      scrollableItemRef,
      scrollableRef,
    });

    return (
      <div
        ref={scrollableItemRef}
        className='h-full snap-center min-w-full flex items-center justify-start flex-col gap-24'
      >
        {children}
      </div>
    );
  }
);

export default function ScrollableSubsection({
  children,
}: {
  children: ReactNode;
}) {
  const scrollableRef = useRef(null);
  const { handleHorizontalScroll } = useHandleHorizontalScroll();
  const [selectedSubsection, setSelectedSubsection] = useState(0);
  const { handleChildrenWithNewProps } = useHandleChildrenWithNewProps();
  const childrenWithNewProps = handleChildrenWithNewProps({
    children,
    scrollableRef,
    onSubsectionSelectChange: setSelectedSubsection,
  });

  return (
    <div className='z-10 size-full center-elements'>
      <IconButton
        disabled={!selectedSubsection}
        onClick={() => {
          const isZero =
            selectedSubsection - 1 > 0 ? selectedSubsection - 1 : 0;

          const id = (childrenWithNewProps?.[isZero]?.props as PropsWithId)?.id;

          if (id || id === 0) {
            setSelectedSubsection(id);
            handleHorizontalScroll({
              num: typeof window === 'object' ? window.innerWidth / id : 0,
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
        {childrenWithNewProps}
      </div>

      <IconButton
        disabled={selectedSubsection + 1 === childrenWithNewProps?.length}
        onClick={() => {
          const id = (
            childrenWithNewProps?.[selectedSubsection + 1]?.props as PropsWithId
          )?.id;

          if (id) {
            setSelectedSubsection(id);
            handleHorizontalScroll({
              num: typeof window === 'object' ? window.innerWidth * id : 0,
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
