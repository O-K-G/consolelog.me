import { Handjet } from 'next/font/google';
import { useText } from '@hooks/useText';
import shenanigans from '@i18nEn/shenanigansText.json';
import {
  useContext,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type ReactNode,
} from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';
import DialogTitle from '@components/shared/dialog/DialogTitle';

const handjet = Handjet({ subsets: ['latin'] });

function OldschoolButton({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
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

function ShenanigansComponent() {
  const { onCloseModal } = useContext(appContext);
  const t = useText();

  return (
    <div
      onClick={onCloseModal}
      onKeyDown={
        onCloseModal as unknown as KeyboardEventHandler<HTMLDivElement>
      }
      role='presentation'
      className='bg-[#4cae9a] lg:cursor-crosshair h-screen w-screen fixed top-0 left-0 center-elements'
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        className={`flex flex-col justify-start items-center border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-[#b4b3b3] text-black lg:cursor-default ${handjet.className}`}
      >
        <DialogTitle
          className='text-xl bg-gray-600 text-white px-4'
          label={t('mainTitle', shenanigans)}
          onClick={onCloseModal}
          closeButtonIcon={
            <div className='rounded-full center-elements bg-red-300 size-7 border-1.5 shadow-inner shadow-black rotate-180 border-[#b4b3b3] hover:bg-white active:bg-white focus:bg-white' />
          }
        />
        <div className='size-full p-4 text-black'>
          <div className='border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white center-elements flex-col size-full p-4 bg-white'>
            <h2 className='text-xl text-center font-bold'>
              {t('wow', shenanigans)}
            </h2>
            <h3 className='text-xl text-center semi-bold'>
              {t('make', shenanigans)}
            </h3>
            <p className='mt-2 text-base'>
              {t('yourApp', shenanigans)}
              <br />
              {t('nineties', shenanigans)}
              <br />
              {t('fax', shenanigans)}
              <br />
              {t('like', shenanigans)}
              <br />
              {t('quit', shenanigans)}
            </p>
            <div className='w-full center-elements mt-2'>
              <OldschoolButton onClick={onCloseModal}>
                {t('quitShenanigans', shenanigans)}
              </OldschoolButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shenanigans() {
  const { onModalContentChange: setModalContent } = useContext(appContext);
  const t = useText();

  return (
    <>
      <button
        type='button'
        className='uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl'
        onClick={() => setModalContent(<ShenanigansComponent />)}
      >
        {t('shenanigansButton', shenanigans)}
      </button>
    </>
  );
}
