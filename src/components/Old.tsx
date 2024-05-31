'use client';

import type {
  NoDialogProps,
  OldProps,
  OldschoolButtonProps,
} from '@constants/interfaces';
import { Pixelify_Sans } from 'next/font/google';
import { useState } from 'react';

const pixelifySans = Pixelify_Sans({ subsets: ['latin'] });

function OldschoolButton({ label, onClick }: OldschoolButtonProps) {
  return (
    <button
      onClick={onClick}
      className='border-2 outline-none border-t-white border-l-white border-r-gray-500 border-b-gray-500 center-elements p-4 hover:bg-white active:bg-white focus:bg-white mt-10'
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
      className='hidden open:center-elements flex-col fixed top-0 bottom-0 left-0 right-0 m-auto border-2 border-l-white border-t-white border-r-gray-500 border-b-gray-500 w-full md:w-3/12 h-[50svh] lg:h-[25dvh] bg-[#b4b3b3] font-bold text-xl text-black'
    >
      <div className='bg-blue-900 p-4 flex items-center justify-between w-full h-4 absolute top-0 right-0'>
        <span className='text-white text-base'>
          Error 418 - I&apos;m a teapot
        </span>
        <button onClick={onClick} type='button'>
          X
        </button>
      </div>
      No.
    </dialog>
  );
}

export default function Old({ onClick }: OldProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-[1080] bg-[#b4b3b3] cursor-crosshair cur font-serif p-4 text-black h-svh lg:h-dvh w-svw lg:w-dvw ${pixelifySans.className}`}
    >
      <h1 className='text-2xl font-bold'>Huh. 90&apos;s internet, who knew.</h1>
      <p className='text-2xl mt-10'>Well, this is what you get.</p>

      <div className='center-elements flex-col'>
        <p className='mt-10'>
          So, do you want to continue with your shenanigans?
        </p>
        <div className='center-elements gap-2'>
          <OldschoolButton onClick={() => setOpen(true)} label='OK' />
          <OldschoolButton onClick={onClick} label='Take me back!' />
        </div>
      </div>
      <NoDialog onClick={() => setOpen(false)} open={open} />
    </div>
  );
}
