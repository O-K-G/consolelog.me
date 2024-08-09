import { Handjet } from 'next/font/google';
import { useTranslations } from 'next-intl';
import { ModalContext as modalContext } from '@components/shared/ModalContext';
import DialogTitle from '@components/shared/dialog/DialogTitle';
import { useContext, type MouseEventHandler, type ReactNode } from 'react';

const COMPONENT_ID = 'shenanigans-id';
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
      className='shadow-sm group hover:bg-gray-100 active:bg-blue-200 border font-bold border-black shadow-black outline-none center-elements p-4'
      type='button'
    >
      <span className='border border-transparent group-focus:border-dashed group-focus:border-black px-2'>
        {children}
      </span>
    </button>
  );
}

function ShenanigansComponent() {
  const { onCloseModal } = useContext(modalContext);
  const t = useTranslations('shenanigansText');

  const handleClick = (
    e:
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>
  ) => {
    const { id } = (e.target as unknown as { id: string }) || {};
    if (id === COMPONENT_ID) {
      onCloseModal(
        e as unknown as Event | React.MouseEvent<HTMLElement, MouseEvent>
      );
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      id={COMPONENT_ID}
      role='presentation'
      className='bg-[#4cae9a] lg:cursor-crosshair h-screen w-screen fixed top-0 left-0 center-elements'
    >
      <div
        className={`flex flex-col justify-start items-center border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-[#b4b3b3] text-black lg:cursor-default ${handjet.className}`}
      >
        <DialogTitle
          className='text-xl bg-gray-600 text-white px-4'
          label={t('mainTitle')}
          onClick={onCloseModal}
          closeButtonIcon={
            <div className='rounded-full center-elements bg-red-300 size-7 border-1.5 shadow-inner shadow-black rotate-180 border-[#b4b3b3] group-hover:bg-white group-active:bg-white group-focus:bg-white' />
          }
        />
        <div className='size-full p-4 text-black'>
          <div className='border-2 border-t-gray-600 border-l-gray-600 border-r-white border-b-white center-elements flex-col size-full p-4 bg-white'>
            <h2 className='text-lg sm:text-xl text-center font-bold'>
              {t('wow')}
            </h2>
            <h3 className='text-lg sm:text-xl text-center semi-bold'>
              {t('make')}
            </h3>
            <div className='sr-only'>{t('graphics')}</div>
            <p className='mt-2 text-base'>
              {t('yourApp')}
              <br />
              {t('nineties')}
              <br />
              {t('fax')}
              <br />
              {t('like')}
              <br />
              {t('quit')}
            </p>
            <div className='w-full center-elements mt-2'>
              <OldschoolButton onClick={onCloseModal}>
                {t('quitShenanigans')}
              </OldschoolButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shenanigans() {
  const { onModalContentChange: setModalContent } = useContext(modalContext);
  const t = useTranslations('shenanigansText');

  return (
    <button
      type='button'
      className='z-10 uppercase outline-none info-text-font-classNames text-white hover:text-title-purple active:text-title-purple-dark focus:text-title-purple text-base sm:text-xl'
      onClick={() => setModalContent(<ShenanigansComponent />)}
    >
      {t('shenanigansButton')}
    </button>
  );
}
