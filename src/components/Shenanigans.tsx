// import { Handjet } from 'next/font/google';
import { useText } from '@hooks/useText';
import shenanigans from '@i18nEn/shenanigansText.json';
import { useContext } from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';
// import { type ReactNode } from 'react';

// const handjet = Handjet({ subsets: ['latin'] });

// function OldschoolButton({
//   children,
//   onClick,
// }: {
//   children: ReactNode;
//   onClick: () => void;
// }) {
//   return (
//     <button
//       onClick={onClick}
//       className='shadow-sm group border font-bold border-black shadow-black outline-none center-elements p-4'
//       type='button'
//     >
//       {children}
//     </button>
//   );
// }

export default function Shenanigans() {
  const { onCloseModal, onModalContentChange: setModalContent } =
    useContext(appContext);
  const t = useText();

  return (
    <>
      <button
        type='button'
        className='uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl'
        onClick={() => setModalContent(<div>xxxx</div>)}
      >
        {t('shenanigansButton', shenanigans)}
      </button>
    </>
  );
}
