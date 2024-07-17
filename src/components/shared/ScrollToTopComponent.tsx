import ScrollToTopIcon from '@components/icons/ScrollToTopIcon';
import { useText } from '@hooks/useText';
import scrollToTopText from '@i18nEn/scrollToTopText.json';
import FixedBottomComponent from '@components/shared/FixedBottomComponent';
import IconButton from '@components/shared/IconButton';
import { AppContext as appContext } from '@components/shared/AppContext';
import { useContext } from 'react';

export default function ScrollToTopComponent() {
  const { currentTopSection } = useContext(appContext);

  const t = useText();

  return (
    <FixedBottomComponent
      className={`left-0 ml-4 z-10 transition-1000 ${
        currentTopSection !== 'about'
          ? ''
          : 'pointer-events-none select-none opacity-0'
      }`}
      label={t('scrollToTop', scrollToTopText)}
      slot={
        <IconButton
          aria-label={t('scrollToTop', scrollToTopText)}
          aria-hidden={currentTopSection === 'about'}
          onClick={() => {
            if (typeof window === 'object') {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
            }
          }}
          className='focus:bg-black/70 rounded-full p-1'
          icon={
            <ScrollToTopIcon className='size-12 fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple' />
          }
        />
      }
    />
  );
}
