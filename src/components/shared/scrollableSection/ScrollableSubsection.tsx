import IconButton from '@components/shared/IconButton';
import { useState, useRef, type ReactNode } from 'react';
import useHandleHorizontalScroll from '@hooks/useHandleHorizontalScroll';
import useHandleChildrenWithNewProps from '@hooks/useHandleChildrenWithNewProps';
import type { PropsWithId } from '@constants/interfaces';
import { ScrollableSubsectionItem } from '@components/shared/scrollableSection/ScrollableSubsectionItem';
import ArrowIconComponent from '@components/icons/ArrowIconComponent';
import { useTranslations } from 'next-intl';

export const LEFT_BUTTON_TEST_ID = 'left-button-test-id';
export const RIGHT_BUTTON_TEST_ID = 'right-button-test-id';

export default function ScrollableSubsection({
  children,
}: {
  children: ReactNode;
}) {
  const scrollableRef = useRef(null);
  const t = useTranslations('scrollableSectionText');
  const { handleHorizontalScroll } = useHandleHorizontalScroll();
  const [selectedSubsection, setSelectedSubsection] = useState(0);
  const { handleChildrenWithNewProps } = useHandleChildrenWithNewProps();
  const childrenWithNewProps = handleChildrenWithNewProps({
    children,
    scrollableRef,
    onSubsectionSelectChange: setSelectedSubsection,
  });

  return (
    <div className="flex justify-center items-end size-full gap-1 z-10">
      <div className="relative h-full max-h-[80%] w-full">
        <IconButton
          data-testid={LEFT_BUTTON_TEST_ID}
          disabled={!selectedSubsection}
          onClick={() => {
            const isZero =
              selectedSubsection - 1 > 0 ? selectedSubsection - 1 : 0;
            const id = (childrenWithNewProps?.[isZero]?.props as PropsWithId)
              ?.id;

            if (id || id === 0) {
              const { offsetWidth } =
                (scrollableRef.current as unknown as HTMLDivElement) || 0;

              setSelectedSubsection(id);
              handleHorizontalScroll({
                num: offsetWidth / id,
                scrollableRef,
              });
            }
          }}
          className="scrollable-subsection-buttons left-0 ltr:rotate-180 rtl:rotate-0"
          aria-label={t('scrollLeft')}
          icon={<ArrowIconComponent />}
        />
      </div>
      <div
        ref={scrollableRef}
        className="hide-scrollbars snap-x snap-mandatory min-w-[80%] size-full flex items-center justify-start overflow-y-hidden overflow-x-auto"
      >
        {childrenWithNewProps}
      </div>

      <div className="relative h-full max-h-[80%] w-full">
        <IconButton
          data-testid={RIGHT_BUTTON_TEST_ID}
          disabled={selectedSubsection + 1 === childrenWithNewProps?.length}
          onClick={() => {
            const id = (
              childrenWithNewProps?.[selectedSubsection + 1]
                ?.props as PropsWithId
            )?.id;

            if (id) {
              const { offsetWidth } =
                (scrollableRef.current as unknown as HTMLDivElement) || 0;

              setSelectedSubsection(id);
              handleHorizontalScroll({
                num: offsetWidth * id,
                scrollableRef,
              });
            }
          }}
          className="scrollable-subsection-buttons right-0 ltr:rotate-0 rtl:rotate-180"
          aria-label={t('scrollRight')}
          icon={<ArrowIconComponent />}
        />
      </div>
    </div>
  );
}

ScrollableSubsection.Item = ScrollableSubsectionItem;
