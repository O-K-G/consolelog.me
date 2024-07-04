// import { Handjet } from 'next/font/google';
import { useText } from '@hooks/useText';
import shenanigans from '@i18nEn/shenanigansText.json';
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
  const t = useText();

  return (
    <>
      <button
        type='button'
        className='uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl'
        onClick={() => console.log(true)}
      >
        {t('shenanigansButton', shenanigans)}
      </button>
    </>
  );
}
