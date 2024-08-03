'use client';

import IconButton from '@components/shared/IconButton';
import LanguageIcon from '@components/icons/LanguageIcon';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { DIRECTION_BY_LANGUAGE } from '@constants/LocaleDirection';
import type {
  ChangeLanguageProps,
  LanguagesListProps,
  SelectLanguageButtonProps,
} from '@constants/interfaces';
import { useState } from 'react';

function SelectLanguageButton({ label, value }: SelectLanguageButtonProps) {
  const { locale } = useParams() || {};
  const pathname = usePathname();
  const isCurrentLocale = locale === value;
  const router = useRouter();

  return (
    <li className='w-full'>
      <button
        onClick={() => {
          if (!isCurrentLocale) {
            // TODO: Proceed from here.
            router.push(
              pathname.replace(`/${locale as string}/`, `/${value}/`)
            );
          }
        }}
        className={`px-4 hover:bg-white/30 ltr:text-left rtl:text-right active:bg-white/50 focus:bg-white/30 w-full text-base outline-none ${
          !isCurrentLocale ? 'text-white' : ' text-title-purple'
        }`}
        type='button'
        value={value}
      >
        {label}
      </button>
    </li>
  );
}

function LanguagesList({ open }: LanguagesListProps) {
  const t = useTranslations('changeLanguage');

  if (!open) {
    return null;
  }

  return (
    <ul className='absolute top-[100%] sm:bottom-[100%] ltr:left-0 rtl:right-0 py-4 font-montserrat flex flex-col items-start justify-start h-fit bg-black/70 border border-white'>
      {Object.keys(DIRECTION_BY_LANGUAGE).map((str: string) => (
        <SelectLanguageButton
          key={`${str}-language`}
          label={t(str)}
          value={str as keyof typeof DIRECTION_BY_LANGUAGE}
        />
      ))}
    </ul>
  );
}

export default function ChangeLanguage({ className }: ChangeLanguageProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <IconButton
        className='transition-300 hover:scale-150 active:scale-150 focus:scale-150'
        onClick={() => setOpen((prevValue) => !prevValue)}
        icon={<LanguageIcon className={className} />}
        aria-label='Change language'
      />
      <LanguagesList open={open} />
    </div>
  );
}
