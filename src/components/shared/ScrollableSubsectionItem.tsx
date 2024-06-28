import {
  type Dispatch,
  type ForwardedRef,
  type ReactNode,
  type SetStateAction,
  forwardRef,
  useRef,
} from 'react';
import useObserveScrollSubsection from '@hooks/useObserveScrollSubsection';

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
