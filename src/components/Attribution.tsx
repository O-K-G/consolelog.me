import { useContext } from 'react';
import { AppContext as appContext } from '@components/shared/AppContext';
import { useText } from '@hooks/useText';
import attributionText from '@i18nEn/attributionText.json';
import DialogTitle from '@components/shared/dialog/DialogTitle';
import { URLs } from '@constants/urls';

function AttributionContent() {
  const { onCloseModal } = useContext(appContext);
  const t = useText();
  const { figmaAttribution, ccbyLicense } = URLs;

  return (
    <div className='flex flex-col justify-start items-center min-w-[100svw] max-w-[100svw] sm:min-w-[50svw] sm:max-w-[50svw] md:min-w-[20dvw] md:min-h-[20dvw] lg:min-w-[10dvw] lg:min-h-[10dvw] bg-black text-white p-4 lg:cursor-default'>
      <DialogTitle
        className='text-xl'
        label={t('title', attributionText)}
        onClick={onCloseModal}
      />
      <p className='size-full break-words font-montserrat text-base sm:text-lg md:text-xl'>
        {t('designBasedOn', attributionText)}
        <br />
        <a
          className='relative before:focus:absolute before:focus:size-full z-10 before:rounded-md before:-z-10 before:focus:bg-white transition-300 inline mt-2 outline-none text-title-purple hover:text-[#75629f] active:text-black focus:text-[#75629f]'
          target='_blank'
          rel='noreferrer'
          href={figmaAttribution}
        >
          {figmaAttribution}
        </a>
        &nbsp;
        {t('andUsedUnderThe', attributionText)}&nbsp;
        <a
          className='relative before:focus:absolute before:focus:size-full z-10 before:rounded-md before:-z-10 before:focus:bg-white transition-300 outline-none text-title-purple hover:text-[#75629f] active:text-black focus:text-[#75629f]'
          target='_blank'
          rel='noreferrer'
          href={ccbyLicense}
        >
          {t('ccby', attributionText)}
        </a>
        &nbsp; {t('license', attributionText)}.
        <span className='block mt-2'>{t('changes', attributionText)}.</span>
      </p>
    </div>
  );
}

export default function Attribution() {
  const { onModalContentChange: setModalContent } = useContext(appContext);
  const t = useText();

  return (
    <button
      type='button'
      className='uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl'
      onClick={() => setModalContent(<AttributionContent />)}
    >
      {t('title', attributionText)}
    </button>
  );
}
