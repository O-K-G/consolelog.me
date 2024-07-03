import { useState } from 'react';
import DialogBackdrop from '@components/shared/dialog/DialogBackdrop';
import { useText } from '@hooks/useText';
import attributionText from '@i18nEn/attributionText.json';
import { URLs } from '@constants/urls';

function AttributionContent() {
  const t = useText();
  const { figmaAttribution, ccbyLicense } = URLs;

  return (
    <p className='h-[90%] w-full break-words font-montserrat text-base sm:text-lg md:text-xl'>
      {t('designBasedOn', attributionText)}
      <a
        className='relative before:focus:absolute before:focus:size-full z-10 before:rounded-md before:-z-10 before:focus:bg-white transition-300 block mt-2 outline-none text-title-purple hover:text-[#75629f] active:text-black focus:text-[#75629f]'
        target='_blank'
        rel='noreferrer'
        href={figmaAttribution}
      >
        {figmaAttribution}
      </a>
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
  );
}

export default function Attribution() {
  const [open, setOpen] = useState(false);
  const t = useText();

  return (
    <>
      <button
        type='button'
        className='uppercase outline-none font-bebas-neue text-white hover:text-title-purple active:text-[#75629f] focus:text-title-purple text-base sm:text-xl md:text-4xl xl:text-6xl'
        onClick={() => setOpen(true)}
      >
        {t('title', attributionText)}
      </button>

      <DialogBackdrop
        open={open}
        onClose={() => setOpen(false)}
        title={t('title', attributionText)}
        sizeClassName='w-full h-fit md:w-[50svw] lg:w-[40dvw]'
        contentSlot={<AttributionContent />}
      />
    </>
  );
}
