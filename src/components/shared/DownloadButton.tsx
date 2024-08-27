'use client';

import IconButton from '@components/shared/IconButton';
import { useTranslations } from 'next-intl';
import { ModalContext as modalContext } from '@components/shared/ModalContext';
import { useContext } from 'react';
import CvIcon from '@components/icons/Cv';
import type { CvProps } from '@constants/interfaces';

// TODO
const FILE_NAME = 'cv of ____';

export default function DownloadButton({ hide }: CvProps) {
  const { onModalContentChange: setModalContent } = useContext(modalContext);
  const t = useTranslations('cv');

  if (hide) {
    return null;
  }

  return (
    <IconButton
      className='rounded-full transition-300 hover:scale-150 active:scale-150 focus:scale-150 side-links-clickable-elements-size'
      icon={<CvIcon className='side-links-icons' />}
      aria-label={t('download')}
      onClick={() => {
        void (async () => {
          try {
            const data = await fetch('/cv', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            const { base64PDFfile } = (await data.json()) || {};

            if (!base64PDFfile) {
              return setModalContent(
                <div className='text-red-500 size-4'>TODO 1</div>
              );
            }

            const el = document.createElement('a');
            el.href = `data:application/pdf;base64,${base64PDFfile}`;
            el.download = `${FILE_NAME}.pdf`;
            el.click();
          } catch (err) {
            setModalContent(<div className='text-red-500 size-4'>TODO 2</div>);
          }
        })();
      }}
    />
  );
}
