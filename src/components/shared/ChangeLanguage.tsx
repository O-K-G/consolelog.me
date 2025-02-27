"use client";

import IconButton from "@components/shared/IconButton";
import LanguageIcon from "@components/icons/LanguageIcon";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { DIRECTION_BY_LANGUAGE } from "@constants/LocaleDirection";
import { ModalContext as modalContext } from "@components/shared/ModalContext";
import DialogTitle from "@components/shared/dialog/DialogTitle";
import { useContext } from "react";
import {
  ChangeLanguageProps,
  SelectLanguageButtonProps,
} from "@constants/interfaces";

function SelectLanguageButton({ label, value }: SelectLanguageButtonProps) {
  const { locale } = useParams() || {};
  const pathname = usePathname();
  const isCurrentLocale = locale === value;
  const router = useRouter();
  const { onCloseModal } = useContext(modalContext);

  return (
    <li className="w-full">
      <button
        data-current-locale={isCurrentLocale}
        onClick={(e) => {
          onCloseModal(e);
          if (!isCurrentLocale) {
            router.push(pathname.replace(`/${locale as string}`, `/${value}`));
          }
        }}
        className="data-[current-locale=false]:text-white data-[current-locale=true]:text-title-purple px-4 py-2 hover:bg-white/30 text-center active:bg-white/50 focus:bg-white/30 w-full text-base outline-hidden"
        type="button"
        value={value}
      >
        {label}
      </button>
    </li>
  );
}

function LanguagesList() {
  const t = useTranslations("languageSelect");
  const { onCloseModal } = useContext(modalContext);

  return (
    <div className="bg-black/70 pb-4 text-white w-svw sm:w-[50svw] md:w-[25svw] center-elements flex-col regular-text-font-by-locale">
      <DialogTitle
        className="text-xl"
        label={t("changeLanguage")}
        onClick={onCloseModal}
      />
      <ul className="center-elements flex-col w-full">
        {Object.keys(DIRECTION_BY_LANGUAGE).map((str: string) => (
          <SelectLanguageButton
            key={`${str}-language`}
            label={t(str)}
            value={str as keyof typeof DIRECTION_BY_LANGUAGE}
          />
        ))}
      </ul>
    </div>
  );
}

export default function ChangeLanguage({ hide }: ChangeLanguageProps) {
  const { onModalContentChange: setModalContent } = useContext(modalContext);
  const t = useTranslations("languageSelect");

  if (!hide) {
    return (
      <IconButton
        className="rounded-full transition-300 hover:scale-150 active:scale-150 focus:scale-150 side-links-clickable-elements-size"
        onClick={() => setModalContent(<LanguagesList />)}
        icon={<LanguageIcon className="side-links-icons" />}
        aria-label={t("changeLanguage")}
      />
    );
  }
}
