import { type MutableRefObject } from 'react';

export default function useHandleHorizontalScroll() {
  const handleHorizontalScroll = ({
    num,
    scrollableRef,
  }: {
    num: number;
    scrollableRef: MutableRefObject<null>;
  }) => {
    (scrollableRef.current as unknown as HTMLDivElement).scrollTo({
      top: 0,
      left: num,
      behavior: 'smooth',
    });
  };

  return { handleHorizontalScroll };
}
