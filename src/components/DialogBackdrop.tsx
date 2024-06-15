'use client';

import type { DialogBackdropProps } from '@constants/interfaces';
import { useEffect, useRef, useState } from 'react';

export default function DialogBackdrop({ open, onClick }: DialogBackdropProps) {
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

  if (open) {
    return (
      <div
        ref={dialogContainerRef}
        className={`${isFade ? 'animate-fade-in' : 'hidden'} ${
          isFade === false ? 'animate-fade-out' : ''
        }`}
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
          Testz
        </button>
      </div>
    );
  }
}
