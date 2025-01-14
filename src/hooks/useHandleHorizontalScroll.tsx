import { RefObject } from "react";
import { useParams } from "next/navigation";
import getDirByLocale from "@utils/getDirByLocale";

export default function useHandleHorizontalScroll() {
  const { locale } = useParams() || {};

  const handleHorizontalScroll = ({
    num,
    scrollableRef,
  }: {
    num: number;
    scrollableRef: RefObject<null>;
  }) => {
    const dir = getDirByLocale({ locale });
    const numByDir = dir === "ltr" ? num : -num;

    (scrollableRef.current as unknown as HTMLDivElement).scrollTo({
      top: 0,
      left: numByDir,
      behavior: "smooth",
    });
  };

  return { handleHorizontalScroll };
}
