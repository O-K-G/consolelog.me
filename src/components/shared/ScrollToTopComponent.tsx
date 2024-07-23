import { useText } from '@hooks/useText';
import scrollToTopText from '@i18nEn/scrollToTopText.json';
import BottomComponent from '@components/shared/BottomComponent';
import IconButton from '@components/shared/IconButton';
import { AppContext as appContext } from '@components/shared/AppContext';
import ArrowUpIcon from '@components/icons/ArrowUpIcon';
import { useContext } from 'react';

export default function ScrollToTopComponent() {
  const { currentTopSection } = useContext(appContext);
  const isAbout = currentTopSection === 'about';
  const t = useText();

  return (
    <BottomComponent
      className={`transition-1000 left-0 ml-4 ${isAbout ? 'opacity-0' : ''}`}
      label={t('scrollToTop', scrollToTopText)}
    >
      <IconButton
        className={` before:focus:absolute before:focus:-top-2 before:focus:h-[125%] before:focus:w-[125%] before:focus:rounded-full before:focus:bg-black/70 before:focus:-z-10 relative p-0.5 flex items-start justify-center rounded-2xl md:rounded-[1.5rem] lg:rounded-full h-12 md:h-14 w-[2.246rem] md:w-[2.808rem] lg:w-[3.369rem] lg:h-16 border-0 border-t-4 md:border-t-[0.3rem] lg:border-t-[0.438rem] border-title-purple hover:border-white active:border-[#75629f] focus:border-title-purple
          ${isAbout ? 'pointer-events-none select-none' : ''}`}
        aria-label={t('scrollToTop', scrollToTopText)}
        aria-hidden={currentTopSection === 'about'}
        icon={
          <ArrowUpIcon className='h-5 md:h-7 lg:h-[1.8rem] fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple' />
        }
        onClick={() => {
          if (typeof window === 'object') {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });
          }
        }}
      />
    </BottomComponent>
  );
}
