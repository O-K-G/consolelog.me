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
        className={`transition-300 hover:scale-150 active:scale-150 focus:scale-150 overflow-hidden size-full center-elements group outline-none ${
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
      className='fixed left-0 top-0 sm:bottom-0 w-16 h-fit z-10 mt-[0.75rem] sm:my-auto ml-4'
    >
      <ul className='size-full center-elements sm:flex-col gap-1.5 sm:gap-10 '>
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
