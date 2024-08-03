import { type MutableRefObject, useContext } from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';

export default function useHandleHorizontalScroll() {
  const { dir } = useContext(appContext);

  const handleHorizontalScroll = ({
    num,
    scrollableRef,
  }: {
    num: number;
    scrollableRef: MutableRefObject<null>;
  }) => {
    const numByDir = dir === 'ltr' ? num : -num;

    (scrollableRef.current as unknown as HTMLDivElement).scrollTo({
      top: 0,
      left: numByDir,
      behavior: 'smooth',
    });
  };

  return { handleHorizontalScroll };
}
