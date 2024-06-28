import { useState } from 'react';
import DialogBackdrop from '@components/shared/DialogBackdrop';

function AttributionContent() {
  return (
    <p className='h-[90%] w-full break-words font-montserrat text-base sm:text-lg md:text-xl'>
      Design based on Jayendra Awasthi&apos;s &apos;Space themed portfolio&apos;
      free community Figma template at:
      <a
        className='relative before:focus:absolute before:focus:size-full z-10 before:rounded-md before:-z-10 before:focus:bg-white transition-300 block mt-2 outline-none text-title-purple hover:text-[#75629f] active:text-black focus:text-[#75629f]'
        target='_blank'
        rel='noreferrer'
        href='https://www.figma.com/community/file/1192903581929005722'
      >
        https://www.figma.com/community/file/1192903581929005722
      </a>
      and used under the&nbsp;
      <a
        className='relative before:focus:absolute before:focus:size-full z-10 before:rounded-md before:-z-10 before:focus:bg-white transition-300 outline-none text-title-purple hover:text-[#75629f] active:text-black focus:text-[#75629f]'
        target='_blank'
        rel='noreferrer'
        href='https://creativecommons.org/licenses/by/4.0/'
      >
        CC BY 4.0
      </a>
      &nbsp; license.
      <span className='block mt-2'>
        Changes were made to the material from the original version.
      </span>
    </p>
  );
}

export default function Attribution() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='mt-auto z-10 uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl'
        onClick={() => setOpen(true)}
      >
        Attribution
      </button>

      <DialogBackdrop
        open={open}
        onClose={() => setOpen(false)}
        title='Attribution'
        sizeClassName='w-full h-fit md:w-[50svw] lg:w-[40dvw]'
        contentSlot={<AttributionContent />}
      />
    </>
  );
}
