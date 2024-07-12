import IconButton from '@components/shared/IconButton';
import { useState, useRef, type ReactNode } from 'react';
import useHandleHorizontalScroll from '@hooks/useHandleHorizontalScroll';
import useHandleChildrenWithNewProps from '@hooks/useHandleChildrenWithNewProps';
import type { PropsWithId } from '@constants/interfaces';
import { ScrollableSubsectionItem } from '@components/shared/scrollableSection/ScrollableSubsectionItem';
import ArrowIconComponent from '@components/icons/ArrowIconComponent';
import { useText } from '@hooks/useText';
import scrollableSectionText from '@i18nEn/scrollableSectionText.json';

export const LEFT_BUTTON_TEST_ID = 'left-button-test-id';
export const RIGHT_BUTTON_TEST_ID = 'right-button-test-id';

const BUTTONS_CLASSNAME =
  'z-10 h-14 lg:h-[6.375rem] absolute top-0 bottom-0 my-auto disabled:opacity-30';

export default function ScrollableSubsection({
  children,
}: {
  children: ReactNode;
}) {
  const scrollableRef = useRef(null);
  const t = useText();
  const { handleHorizontalScroll } = useHandleHorizontalScroll();
  const [selectedSubsection, setSelectedSubsection] = useState(0);
  const { handleChildrenWithNewProps } = useHandleChildrenWithNewProps();
  const childrenWithNewProps = handleChildrenWithNewProps({
    children,
    scrollableRef,
    onSubsectionSelectChange: setSelectedSubsection,
  });

  return (
    <div className='flex justify-center items-end size-full gap-1 z-10'>
      <div className='relative h-full max-h-[80%] w-1/3'>
        <IconButton
          data-testid={LEFT_BUTTON_TEST_ID}
          disabled={!selectedSubsection}
          onClick={() => {
            const isZero =
              selectedSubsection - 1 > 0 ? selectedSubsection - 1 : 0;
            const id = (childrenWithNewProps?.[isZero]?.props as PropsWithId)
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
          aria-label={t('scrollLeft', scrollableSectionText)}
          icon={<ArrowIconComponent />}
        />
      </div>
      <div
        ref={scrollableRef}
        className='hide-scrollbars snap-x snap-mandatory size-full flex items-center justify-start overflow-y-hidden overflow-x-auto'
      >
        {childrenWithNewProps}
      </div>

      <div className='relative h-full max-h-[80%] w-1/3'>
        <IconButton
          data-testid={RIGHT_BUTTON_TEST_ID}
          disabled={selectedSubsection + 1 === childrenWithNewProps?.length}
          onClick={() => {
            const id = (
              childrenWithNewProps?.[selectedSubsection + 1]
                ?.props as PropsWithId
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
          aria-label={t('scrollRight', scrollableSectionText)}
          icon={<ArrowIconComponent />}
        />
      </div>
    </div>
  );
}

ScrollableSubsection.Item = ScrollableSubsectionItem;
