import type { AnchorLinkProps } from '@constants/interfaces';
import GHIcon from '@components/GHIcon';
import LIIcon from '@components/LIIcon';
import { URLs } from '@constants/urls';
import sideLinks from '@i18nEn/sideLinks.json';
import { useText } from '@hooks/useText';

const ICONS_CLASSNAME =
  'fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple size-full shrink-0';

function AnchorLink({ url, icon, isRounded, ariaLabel }: AnchorLinkProps) {
  return (
    <li>
      <a
        href={url}
        aria-label={ariaLabel}
        rel='noreferrer'
        target='_blank'
        className={`relative p-2 overflow-hidden size-full center-elements group outline-none before:size-full before:bg-transparent focus:before:bg-black/30 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:-z-10 ${
          !isRounded ? '' : 'rounded-full'
        }`}
      >
        {icon}
      </a>
    </li>
  );
}

export default function SideLinks() {
  const t = useText();

  return (
    <nav
      aria-label={t('navAriaLabel', sideLinks)}
      className='fixed left-0 top-0 sm:bottom-0 w-24 sm:w-16 p-1 h-fit z-10 overflow-hidden mt-[0.1rem] sm:my-auto ml-4'
    >
      <ul className='size-full center-elements sm:flex-col gap-1 sm:gap-16 '>
        <AnchorLink
          isRounded
          ariaLabel={t('ghLinkAriaLabel', sideLinks)}
          url={URLs.gitHub}
          icon={<GHIcon className={ICONS_CLASSNAME} />}
        />
        <AnchorLink
          ariaLabel={t('liLinkAriaLabel', sideLinks)}
          url={URLs.linkedIn}
          icon={<LIIcon className={ICONS_CLASSNAME} />}
        />
      </ul>
    </nav>
  );
}
