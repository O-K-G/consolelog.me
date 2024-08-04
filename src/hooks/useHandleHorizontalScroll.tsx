import { type MutableRefObject } from 'react';
import { useParams } from 'next/navigation';
import { DIRECTION_BY_LANGUAGE } from '@constants/LocaleDirection';

export default function useHandleHorizontalScroll() {
  const { locale } = useParams() || {};

  const handleHorizontalScroll = ({
    num,
    scrollableRef,
  }: {
    num: number;
    scrollableRef: MutableRefObject<null>;
  }) => {
    const dir =
      DIRECTION_BY_LANGUAGE[locale as keyof typeof DIRECTION_BY_LANGUAGE];
    const numByDir = dir === 'ltr' ? num : -num;

    (scrollableRef.current as unknown as HTMLDivElement).scrollTo({
      top: 0,
      left: numByDir,
      behavior: 'smooth',
    });
  };

  return { handleHorizontalScroll };
}
