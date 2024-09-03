import { type MutableRefObject } from 'react';
import { useParams } from 'next/navigation';
import getDirByLang from '@utils/getDirByLang';

export default function useHandleHorizontalScroll() {
  const { locale } = useParams() || {};

  const handleHorizontalScroll = ({
    num,
    scrollableRef,
  }: {
    num: number;
    scrollableRef: MutableRefObject<null>;
  }) => {
    const dir = getDirByLang({ locale });
    const numByDir = dir === 'ltr' ? num : -num;

    (scrollableRef.current as unknown as HTMLDivElement).scrollTo({
      top: 0,
      left: numByDir,
      behavior: 'smooth',
    });
  };

  return { handleHorizontalScroll };
}
