'use client';

import type { DialogBackdropProps } from '@constants/interfaces';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDisableScroll } from '@hooks/useDisableScroll';
import DialogComponent from '@components/shared/dialog/DialogComponent';

export default function DialogBackdrop({
  open,
  onClose,
  title,
  contentSlot,
  sizeClassName,
  className,
  dialogWindowClassName,
  titleClassName,
  closeIconComponent,
}: DialogBackdropProps) {
  const [isFade, setIsFade] = useState<null | boolean>(null);
  const { handleDisableScroll } = useDisableScroll();
  const dialogContainerRef = useRef(null);
  const dialogRef = useRef(null);

  const handleTransitionEnd = useCallback(() => {
    handleDisableScroll(false);
    setIsFade(null);
    onClose?.();
    (
      dialogContainerRef.current as unknown as HTMLDivElement
    )?.removeEventListener('animationend', handleTransitionEnd);
  }, [handleDisableScroll, onClose]);

  const handleClick = useCallback(() => {
    if (dialogRef.current) {
      (dialogRef.current as HTMLDialogElement).close();
    }
    setIsFade(false);
    (dialogContainerRef.current as unknown as HTMLDivElement)?.addEventListener(
      'animationend',
      handleTransitionEnd
    );
  }, [handleTransitionEnd]);

  useEffect(() => {
    const handleEsc = ({ key }: { key: string }) => {
      if (key === 'Escape') {
        handleClick();
        window.removeEventListener('keydown', handleEsc);
      }
    };

    if (isFade === null && open) {
      handleDisableScroll(true);
      setIsFade(true);
      window.addEventListener('keydown', handleEsc);
    }
  }, [handleClick, handleDisableScroll, isFade, open]);

  if (open) {
    return (
      <div
        onClick={handleClick}
        role='presentation'
        ref={dialogContainerRef}
        className={`lg:cursor-pointer z-20 ${
          isFade ? 'animate-dialog-backdrop-fade-in' : 'hidden'
        } ${isFade === false ? 'animate-dialog-backdrop-fade-out' : ''}`}
      >
        <DialogComponent
          ref={dialogRef}
          isFade={isFade}
          onClick={handleClick}
          title={title}
          contentSlot={contentSlot}
          sizeClassName={sizeClassName}
          className={className}
          dialogWindowClassName={dialogWindowClassName}
          titleClassName={titleClassName}
          closeIconComponent={closeIconComponent}
        />
      </div>
    );
  }
}
