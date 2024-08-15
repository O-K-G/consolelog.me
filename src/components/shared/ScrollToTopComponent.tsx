import { useTranslations } from 'next-intl';
import FixedBottomComponent from '@components/shared/FixedBottomComponent';
import IconButton from '@components/shared/IconButton';
import ArrowUpIcon from '@components/icons/ArrowUpIcon';

export default function ScrollToTopComponent() {
  const t = useTranslations('scrollToTopText');

  // TODO: Proceed from here.

  return (
    <FixedBottomComponent
      // isTransparent={isAbout}
      className='ltr:left-0 ltr:ml-4 rtl:right-0 rtl:mr-4'
      label={t('scrollToTop')}
    >
      <IconButton
        // data-pointer-events={isAbout}
        className='data-[pointer-events=true]:pointer-events-none data-[pointer-events=true]:select-none before:focus:absolute before:focus:-top-2 before:focus:h-[125%] before:focus:w-[125%] before:focus:rounded-full before:focus:bg-black/70 before:focus:-z-10 relative p-0.5 flex items-start justify-center rounded-2xl md:rounded-[1.5rem] lg:rounded-full h-12 md:h-14 w-[2.246rem] md:w-[2.808rem] lg:w-[3.369rem] lg:h-16 border-0 border-t-4 md:border-t-[0.3rem] lg:border-t-[0.438rem] border-title-purple hover:border-white active:border-title-purple-dark focus:border-title-purple'
        aria-label={t('scrollToTop')}
        // aria-hidden={isAbout}
        icon={
          <ArrowUpIcon className='h-5 md:h-7 lg:h-[1.8rem] fill-title-purple group-hover:fill-white group-active:fill-title-purple-dark group-focus:fill-title-purple' />
        }
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }}
      />
    </FixedBottomComponent>
  );
}
