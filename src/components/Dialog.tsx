'use client';

import { useEffect, useRef, useState } from 'react';

export interface DialogProps {
  open: boolean;
  onClick: () => void;
}

export default function Dialog({ open, onClick }: DialogProps) {
  const [isFade, setIsFade] = useState<null | boolean>(null);
  const dialogContainerRef = useRef(null);

  const handleTransitionEnd = () => {
    setIsFade(null);
    onClick?.();
    (
      dialogContainerRef.current as unknown as HTMLDivElement
    )?.removeEventListener('animationend', handleTransitionEnd);
  };

  useEffect(() => {
    if (isFade === null && open) {
      setIsFade(true);
    }
  }, [isFade, onClick, open]);

  return (
    <div
      ref={dialogContainerRef}
      className={`w-svw s-svh lg:w-dvw lg:h-svh ${
        isFade ? 'animate-fade-in' : ''
      } ${isFade === false ? 'animate-fade-out' : ''}`}
    >
      <button
        type='button'
        onClick={() => {
          setIsFade(false);
          (
            dialogContainerRef.current as unknown as HTMLDivElement
          )?.addEventListener('animationend', handleTransitionEnd);
        }}
      >
        xxx
      </button>
    </div>
  );
}
