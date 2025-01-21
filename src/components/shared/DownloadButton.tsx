'use client';

import IconButton from '@components/shared/IconButton';
import { useTranslations } from 'next-intl';
import useHandleDownload from '@hooks/useHandleDownload';
import CvIcon from '@components/icons/Cv';
import { CvProps } from '@constants/interfaces';
import { DownloadError } from '@components/DownloadError';
import { URLs } from '@constants/urls';

export default function DownloadButton({ hide }: CvProps) {
  const t = useTranslations('cv');
  const { handleDownload } = useHandleDownload();
  const { cvFileURL } = URLs;

  if (hide) {
    return null;
  }

  return (
    <IconButton
      className="rounded-full transition-300 hover:scale-150 active:scale-150 focus:scale-150 side-links-clickable-elements-size"
      icon={<CvIcon className="side-links-icons" />}
      aria-label={t('download')}
      onClick={() =>
        handleDownload({
          url: cvFileURL,
          fileName: t('filename'),
          errorModalContent: <DownloadError />,
        })
      }
    />
  );
}
