'use client';

import { useEffect, useRef, useState } from 'react';

export default function Loader() {
  const [isLoderVisible, setIsLoderVisible] = useState(true);
  const [isLoader, setIsLoader] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const { current } = loaderRef;

    const onLoad = () => {
      if (isLoderVisible) {
        setIsLoderVisible(false);
      }
    };

    if (isLoader) {
      if (document.readyState === 'complete') {
        onLoad();
      } else {
        window.addEventListener('load', onLoad);
      }

      const handleTransitionEnd = () => setIsLoader(false);

      (current as unknown as HTMLDivElement)?.addEventListener(
        'transitionend',
        handleTransitionEnd
      );

      return () => {
        (current as unknown as HTMLDivElement)?.removeEventListener(
          'transitionend',
          handleTransitionEnd
        );
        window.removeEventListener('load', onLoad);
      };
    }
  }, [isLoader, isLoderVisible]);

  if (!isLoader) {
    return null;
  }

  return (
    <div
      ref={loaderRef}
      className={`transition-1000 fixed text-black text-lg flex flex-col items-center justify-center z-50 top-0 left-0 size-full bg-white ${
        isLoderVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='size-24 bg-red-500 rounded-lg animate-spin mb-4' />
      Temporary loader
    </div>
  );
}
