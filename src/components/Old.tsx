'use client';

import { Handjet } from 'next/font/google';
import { type ForwardedRef, forwardRef, useRef, useState } from 'react';
import { useDisableScroll } from '@hooks/useDisableScroll';
import { useText } from '@hooks/useText';
import oldComponentText from '@i18nEn/oldComponentText.json';
import type {
  NoDialogProps,
  OldschoolButtonProps,
} from '@constants/interfaces';

const handjet = Handjet({ subsets: ['latin'] });

function OldschoolButton({
  children,
  onClick,
  disabled,
}: OldschoolButtonProps) {
  return (
    <button
      disabled={disabled}
      aria-hidden={disabled}
      onClick={onClick}
      className={`shadow-sm border border-black shadow-black outline-none center-elements p-4 mt-10 ${
        disabled
          ? 'cursor-not-allowed'
          : 'hover:bg-white active:bg-white focus:bg-white'
      }`}
      type='button'
    >
      {children}
    </button>
  );
}

const NoDialog = forwardRef(function NoDialog(
  { onClick }: NoDialogProps,
  ref: ForwardedRef<null>
) {
  const t = useText();

  return (
    <dialog
      ref={ref}
      className='hidden backdrop:hidden open:flex open:center-elements border border-black shadow-md shadow-gray-500 flex-col fixed top-0 bottom-0 left-0 right-0 m-auto w-11/12 md:w-3/12 h-[50svh] lg:h-[25dvh] bg-[#b4b3b3] font-bold text-xl text-black'
    >
      <div className='bg-gray-500 py-4 pl-4 pr-0.5 flex items-center justify-between w-full h-4 absolute top-0 right-0'>
        <h2 className='text-white text-base'>
          {t('error418', oldComponentText)}
        </h2>
        <button
          className='rounded-full center-elements bg-red-300 size-7 border-1.5 shadow-inner shadow-black rotate-180 border-[#b4b3b3] hover:bg-white active:bg-white focus:bg-white'
          onClick={onClick}
          type='button'
          aria-label={t('close', oldComponentText)}
        />
      </div>
      {t('no', oldComponentText)}
    </dialog>
  );
});

export default function Old() {
  const [isOldComponentOpen, setOldComponentOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { handleDisableScroll } = useDisableScroll();
  const oldDialogRef = useRef(null);
  const noDialogRef = useRef(null);
  const t = useText();
  const A11Y_SCREEN_READER_TEXT = `${t('graphicsOff', oldComponentText)} ${t(
    'whoKnew',
    oldComponentText
  )} ${t('whatYouGet', oldComponentText)} ${t(
    'shenanigans',
    oldComponentText
  )} ${t('hitTheButtons', oldComponentText)}`;

  return (
    <>
      <button
        type='button'
        onClick={() => {
          (oldDialogRef.current as unknown as HTMLDialogElement).showModal();
          setOldComponentOpen(true);
          handleDisableScroll(true);
        }}
        className='uppercase z-10 outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base'
      >
        {t('whatIf', oldComponentText)}
      </button>

      <dialog
        ref={oldDialogRef}
        className={`open:fixed open:flex backdrop:bg-[#b4b3b3] top-0 left-0 bottom-0 right-0 m-auto z-50 bg-[#b4b3b3] items-center justify-start flex-col cursor-crosshair font-serif p-4 text-black h-svh lg:h-dvh w-svw lg:min-w-dvw ${handjet.className}`}
      >
        <h2 aria-hidden className='text-2xl font-bold'>
          {t('whoKnew', oldComponentText)}
        </h2>
        <h3 aria-hidden className='text-2xl mt-10'>
          {t('whatYouGet', oldComponentText)}
        </h3>

        <div className='center-elements flex-col'>
          <div aria-live='assertive' className='sr-only'>
            {isOldComponentOpen && A11Y_SCREEN_READER_TEXT}
          </div>
          <p aria-hidden className='mt-10'>
            {t('shenanigans', oldComponentText)}
          </p>
          <div className='center-elements gap-2'>
            <OldschoolButton
              disabled={open}
              onClick={() => {
                const date = new Date();
                setOpen(true);
                (
                  noDialogRef?.current as unknown as HTMLDialogElement
                ).showModal();
                console.warn(
                  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}: ${t(
                    'justSaying',
                    oldComponentText
                  )}`
                );
              }}
            >
              {t('ok', oldComponentText)}
            </OldschoolButton>
            <OldschoolButton
              disabled={open}
              onClick={() => {
                setOldComponentOpen(false);
                handleDisableScroll(false);
                (oldDialogRef.current as unknown as HTMLDialogElement).close();
              }}
            >
              {t('takeMeBack', oldComponentText)}
            </OldschoolButton>
          </div>
        </div>
        <NoDialog
          ref={noDialogRef}
          onClick={() => {
            (noDialogRef?.current as unknown as HTMLDialogElement).close();
            setOpen(false);
          }}
        />
      </dialog>
    </>
  );
}
