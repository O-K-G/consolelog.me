'use client';

import type {
  NoDialogProps,
  OldProps,
  OldschoolButtonProps,
} from '@constants/interfaces';
import { Handjet } from 'next/font/google';
import { useState } from 'react';

const handjet = Handjet({ subsets: ['latin'] });

function OldschoolButton({ label, onClick, disabled }: OldschoolButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`shadow-sm border border-black shadow-black outline-none center-elements p-4 mt-10 ${
        disabled
          ? 'cursor-not-allowed'
          : 'hover:bg-white active:bg-white focus:bg-white'
      }`}
      type='button'
    >
      {label}
    </button>
  );
}

function NoDialog({ open, onClick }: NoDialogProps) {
  return (
    <dialog
      open={open}
      className='hidden open:center-elements border border-black shadow-md shadow-gray-500 flex-col fixed top-0 bottom-0 left-0 right-0 m-auto w-11/12 md:w-3/12 h-[50svh] lg:h-[25dvh] bg-[#b4b3b3] font-bold text-xl text-black'
    >
      <div className='bg-gray-500 py-4 pl-4 pr-0.5 flex items-center justify-between w-full h-4 absolute top-0 right-0'>
        <span className='text-white text-base'>
          Error 418 - I&apos;m a teapot
        </span>
        <button
          className='rounded-full center-elements bg-red-300 size-7 border-1.5 shadow-inner shadow-black rotate-180 border-[#b4b3b3] hover:bg-white active:bg-white focus:bg-white'
          onClick={onClick}
          type='button'
        ></button>
      </div>
      No.
    </dialog>
  );
}

export default function Old({ onClick }: OldProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-[1080] bg-[#b4b3b3] cursor-crosshair cur font-serif p-4 text-black h-svh lg:h-dvh w-svw lg:w-dvw ${handjet.className}`}
    >
      <h2 className='text-2xl font-bold'>Huh. 90&apos;s internet, who knew.</h2>
      <p className='text-2xl mt-10'>Well, this is what you get.</p>

      <div className='center-elements flex-col'>
        <p className='mt-10'>
          So, do you want to continue with your shenanigans?
        </p>
        <div className='center-elements gap-2'>
          <OldschoolButton
            disabled={open}
            onClick={() => {
              const date = new Date();
              setOpen(true);
              console.warn(
                `${date.toLocaleDateString()} ${date.toLocaleTimeString()}: Error (418): I'm a teapot. Just saying. :)`
              );
            }}
            label='OK'
          />
          <OldschoolButton
            disabled={open}
            onClick={onClick}
            label='Take me back!'
          />
        </div>
      </div>
      <NoDialog onClick={() => setOpen(false)} open={open} />
    </div>
  );
}
