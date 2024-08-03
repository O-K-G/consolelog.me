import type { AnchorLinkProps, SideLinksProps } from '@constants/interfaces';
import GHIcon from '@components/icons/GHIcon';
import LIIcon from '@components/icons/LIIcon';
import { URLs } from '@constants/urls';
import { useTranslations } from 'next-intl';

export const GH_TEST_ID = 'gh-test';
export const LI_TEST_ID = 'li-test';

const ICONS_CLASSNAME =
  'fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple size-full';

function AnchorLink({
  url,
  icon,
  isRounded,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
}: AnchorLinkProps) {
  return (
    <li>
      <a
        data-testid={dataTestId}
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

export default function SideLinks({
  className = 'fixed ltr:left-0 rtl:right-0 top-0 sm:bottom-0 w-16 h-fit mt-[1.35rem] sm:my-auto ltr:ml-4 rtl:mr-4',
  ulClassName = 'size-full center-elements sm:flex-col gap-4 sm:gap-10',
}: SideLinksProps) {
  const t = useTranslations('sideLinks');

  return (
    <nav aria-label={t('navAriaLabel')} className={className}>
      <ul className={ulClassName}>
        <AnchorLink
          isRounded
          data-testid={GH_TEST_ID}
          aria-label={t('ghLinkAriaLabel')}
          url={URLs.gitHub}
          icon={<GHIcon className={ICONS_CLASSNAME} />}
        />
        <AnchorLink
          data-testid={LI_TEST_ID}
          aria-label={t('liLinkAriaLabel')}
          url={URLs.linkedIn}
          icon={<LIIcon className={ICONS_CLASSNAME} />}
        />
      </ul>
    </nav>
  );
}
