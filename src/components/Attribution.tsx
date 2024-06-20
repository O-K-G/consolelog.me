import type { AttributionDialogProps } from '@constants/interfaces';
import { useState } from 'react';

function AttributionDialog({ open, onClick }: AttributionDialogProps) {
  return (
    <dialog
      open={open}
      className='fixed top-0 bottom-0 left-0 right-0 m-auto bg-white size-3/4 text-xs text-black z-10'
    >
      <div className='w-full flex items-center justify-end'>
        <button type='button' onClick={onClick}>
          X
        </button>
      </div>
      Design based on Jayendra Awasthi&apos;s &apos;Space themed portfolio&apos;
      free community Figma template at&nbsp;
      <a
        target='_blank'
        rel='noreferrer'
        href='https://www.figma.com/community/file/1192903581929005722'
      >
        https://www.figma.com/community/file/1192903581929005722
      </a>
      and used under the&nbsp;
      <a
        target='_blank'
        rel='noreferrer'
        href='https://creativecommons.org/licenses/by/4.0/'
      >
        CC BY 4.0
      </a>
      &nbsp; license. Changes were made to the material from the original
      version.
    </dialog>
  );
}

export default function Attribution() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='bg-red-500 absolute top-96 right-0'
        onClick={() => setOpen(true)}
      >
        Attribution - TBD
      </button>
      <AttributionDialog open={open} onClick={() => setOpen(false)} />
    </>
  );
}
