import { type ForwardedRef, forwardRef, useRef } from 'react';
import useObserveScrollSubsection from '@hooks/useObserveScrollSubsection';
import type { ScrollableSubsectionItemProps } from '@constants/interfaces';

export const SCROLLABLE_ITEM_TEST_ID = 'scrollable-item-test-id';

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
        className='relative h-full snap-center min-w-full flex justify-end gap-4 items-center flex-col'
      >
        {children}
      </div>
    );
  }
);
