import { type ForwardedRef, forwardRef, useRef } from 'react';
import useObserveScrollSubsection from '@hooks/useObserveScrollSubsection';
import type { ScrollableSubsectionItemProps } from '@constants/interfaces';

const SCROLLABLE_ITEM_TEST_ID = 'scrollable-ityem-test-id';

export const ScrollableSubsectionItem = forwardRef(
  function ScrollableSubsectionItem(
    { children, onSubsectionSelectChange, id }: ScrollableSubsectionItemProps,
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
        data-testid={SCROLLABLE_ITEM_TEST_ID}
        ref={scrollableItemRef}
        className='h-full snap-center min-w-full flex items-center justify-start flex-col gap-24'
      >
        {children}
      </div>
    );
  }
);
