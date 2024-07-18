import { useContext } from 'react';
import { ModalContext as modalContext } from '@components/shared/ModalContext';
import { useText } from '@hooks/useText';
import attributionText from '@i18nEn/attributionText.json';
import DialogTitle from '@components/shared/dialog/DialogTitle';
import { URLs } from '@constants/urls';

const ANCHOR_TAG_CLASSNAME =
  'outline-none focus:bg-white focus:rounded-md text-title-purple hover:text-[#75629f] active:text-black focus:text-[#75629f]';

function AttributionContent() {
  const { onCloseModal } = useContext(modalContext);
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
        <span className='inline-block'>
          {t('designBasedOn', attributionText)}
        </span>
        <br />
        <a
          className={ANCHOR_TAG_CLASSNAME}
          target='_blank'
          rel='noreferrer'
          href={figmaAttribution}
        >
          {figmaAttribution}
        </a>
        &nbsp;
        <span className='inline-block'>
          {t('andUsedUnderThe', attributionText)}
        </span>
        &nbsp;
        <a
          className={ANCHOR_TAG_CLASSNAME}
          target='_blank'
          rel='noreferrer'
          href={ccbyLicense}
        >
          {t('ccby', attributionText)}
        </a>
        &nbsp;
        <span className='inline-block'>{t('license', attributionText)}</span>
        &nbsp;
        <span className='inline-block mt-2'>
          {t('changes', attributionText)}
        </span>
      </p>
    </div>
  );
}

export default function Attribution() {
  const { onModalContentChange: setModalContent } = useContext(modalContext);
  const t = useText();

  return (
    <button
      type='button'
      className='z-10 uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl'
      onClick={() => setModalContent(<AttributionContent />)}
    >
      {t('title', attributionText)}
    </button>
  );
}
