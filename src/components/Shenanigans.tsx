import DialogBackdrop from '@components/shared/dialog/DialogBackdrop';
import { Handjet } from 'next/font/google';
import { useText } from '@hooks/useText';
import shenanigans from '@i18nEn/shenanigansText.json';
import { useState, type ReactNode } from 'react';

const handjet = Handjet({ subsets: ['latin'] });

function OldschoolButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className='shadow-sm group border font-bold border-black shadow-black outline-none center-elements p-4'
      type='button'
    >
      {children}
    </button>
  );
}

export default function Shenanigans() {
  const t = useText();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='z-10 uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl'
        onClick={() => setOpen(true)}
      >
        {t('shenanigansButton', shenanigans)}
      </button>
      <DialogBackdrop
        open={open}
        className={`size-full md:p-4 center-elements bg-[#4cae9a] ${handjet.className}`}
        onClose={() => setOpen(false)}
        title={t('mainTitle', shenanigans)}
        sizeClassName='w-full h-fit md:w-[50svw] lg:w-[40dvw]'
        titleClassName='overflow-hidden whitespace-nowrap flex text-xl md:text-base items-center justify-end w-full h-10 bg-gray-500 text-white'
        closeIconComponent={
          <div className='rounded-full center-elements bg-red-300 size-7 border-1.5 shadow-inner shadow-black rotate-180 border-[#b4b3b3] hover:bg-white active:bg-white focus:bg-white' />
        }
        contentSlot={
          <div className='overflow-hidden font-normal p-2 h-96 w-full bg-[#b4b3b3]'>
            <div className='flex justify-around pb-2 overflow-hidden items-center flex-col size-full bg-white border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white'>
              <div className='flex justify-start items-center flex-col overflow-hidden p-4 size-full'>
                <h2 className='font-bold text-xl sm:text-3xl w-full text-center'>
                  {t('wow', shenanigans)}
                </h2>
                <h3 className='font-bold text-xl sm:text-2xl w-full text-center mt-2'>
                  {t('make', shenanigans)}
                </h3>
                <p className='mt-2 break-words text-base sm:text-md'>
                  {t('yourApp', shenanigans)} <br />
                  {t('nineties', shenanigans)}
                  <br />
                  {t('fax', shenanigans)}
                  <br />
                  {t('like', shenanigans)}
                  <br />
                  {t('quit', shenanigans)}
                </p>
              </div>
              <OldschoolButton onClick={() => setOpen(false)}>
                <span className='text-base md:text-xl border border-transparent group-hover:border-black group-active:border-black group-focus:border-black border-dashed p-1'>
                  {t('quitShenanigans', shenanigans)}
                </span>
              </OldschoolButton>
            </div>
          </div>
        }
        dialogWindowClassName='lg:cursor-crosshair font-bold relative border-2 border-l-white border-b-gray-600 border-r-gray-600 border-t-white text-black text-2xl bg-[#b4b3b3] overflow-hidden'
      />
    </>
  );
}
