import ArrowRightIcon from '@components/ArrowRightIcon';
import IconButton from '@components/shared/IconButton';
import {
  useRef,
  type ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useState,
  type PropsWithChildren,
  type MutableRefObject,
  forwardRef,
  type ForwardedRef,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from 'react';
import useHandleHorizontalScroll from '@hooks/useHandleHorizontalScroll';

interface ChildrenWithIdProps extends PropsWithChildren {
  id: number;
}

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
      onSubsectionSelectChange: setSubsectionSelectChange,
      id,
    }: {
      children: ReactNode;
      onSubsectionSelectChange: Dispatch<SetStateAction<number>>;
      id: number;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) {
    const scrollableRef = ref;
    const scrollableItemRef = useRef(null);

    useEffect(() => {
      const options = {
        root: (scrollableRef as MutableRefObject<HTMLDivElement>)?.current,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const handleObserve = (e: IntersectionObserverEntry[]) => {
        const { isIntersecting } = e[0];

        if (isIntersecting) {
          setSubsectionSelectChange(id);
        }
      };

      const observer = new IntersectionObserver(handleObserve, options);
      observer.observe(
        (scrollableItemRef as unknown as MutableRefObject<HTMLDivElement>)
          ?.current
      );

      return () => observer.disconnect();
    }, [id, scrollableRef, setSubsectionSelectChange]);

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

  const childrenWithId = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        id: index,
        ref: scrollableRef,
        onSubsectionSelectChange: setSelectedSubsection,
      } as { id: number; ref: MutableRefObject<null>; onSubsectionSelectChange: Dispatch<SetStateAction<number>> });
    }
  });

  return (
    <div className='z-10 size-full center-elements'>
      <IconButton
        disabled={!selectedSubsection}
        onClick={() => {
          const isZero =
            selectedSubsection - 1 > 0 ? selectedSubsection - 1 : 0;

          const id = (childrenWithId?.[isZero]?.props as ChildrenWithIdProps)
            ?.id;

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
        {childrenWithId}
      </div>

      <IconButton
        disabled={selectedSubsection + 1 === childrenWithId?.length}
        onClick={() => {
          const id = (
            childrenWithId?.[selectedSubsection + 1]
              ?.props as ChildrenWithIdProps
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
