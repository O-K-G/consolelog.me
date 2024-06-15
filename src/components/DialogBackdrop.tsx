'use client';

import type { DialogBackdropProps } from '@constants/interfaces';
import { useEffect, useRef, useState } from 'react';
import { useDisableScroll } from '@hooks/useDisableScroll';
import ErrorDialog from '@components/ErrorDialog';

export default function DialogBackdrop({
  open,
  onClose,
  errorDetails,
}: DialogBackdropProps) {
  const [isFade, setIsFade] = useState<null | boolean>(null);
  const { handleDisableScroll } = useDisableScroll();
  const dialogContainerRef = useRef(null);

  const handleTransitionEnd = () => {
    handleDisableScroll(false);
    setIsFade(null);
    onClose?.();
    (
      dialogContainerRef.current as unknown as HTMLDivElement
    )?.removeEventListener('animationend', handleTransitionEnd);
  };

  useEffect(() => {
    if (isFade === null && open) {
      handleDisableScroll(true);
      setIsFade(true);
    }
  }, [handleDisableScroll, isFade, open]);

  const handleClick = () => {
    setIsFade(false);
    (dialogContainerRef.current as unknown as HTMLDivElement)?.addEventListener(
      'animationend',
      handleTransitionEnd
    );
  };

  if (open) {
    return (
      <div
        onClick={handleClick}
        role='presentation'
        ref={dialogContainerRef}
        className={`lg:cursor-pointer ${
          isFade ? 'animate-dialog-backdrop-fade-in' : 'hidden'
        } ${isFade === false ? 'animate-dialog-backdrop-fade-out' : ''}`}
      >
        <ErrorDialog
          isFade={isFade}
          errorDetails={errorDetails}
          onClick={handleClick}
        />
      </div>
    );
  }
}
