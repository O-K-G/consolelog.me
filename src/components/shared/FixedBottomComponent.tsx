import type { FixedBottomComponentProps } from '@constants/interfaces';

const POLYFILL_CLASSNAMES =
  'data-[hide-on-scroll=true]:animate-hide-components-polyfill data-[hide-on-scroll=true]:animate-scroll-polyfill data-[show-on-scroll=true]:animate-show-components-polyfill data-[show-on-scroll=true]:animate-scroll-polyfill';

export default function FixedBottomComponent({
  label,
  slot,
  className = 'ltr:right-0 ltr:mr-4 rtl:left-0 rtl:ml-4',
  children,
  hideOnScroll,
  showOnScroll,
}: FixedBottomComponentProps) {
  return (
    <div
      data-hide-on-scroll={hideOnScroll}
      data-show-on-scroll={showOnScroll}
      className={`z-10 transition-1000 fixed bottom-0 mb-4 center-elements flex-col data-[hide-on-scroll=true]:animate-scroll data-[hide-on-scroll=true]:animate-hide-components data-[show-on-scroll=true]:animate-scroll data-[show-on-scroll=true]:animate-show-components ${POLYFILL_CLASSNAMES} ${className}`}
    >
      <div className='uppercase whitespace-nowrap text-title-purple text-base md:text-xl lg:text-2xl text-center w-full info-text-font-classNames'>
        {label}
      </div>
      {children ?? (
        <div className='relative p-0.5 flex items-start justify-center rounded-2xl md:rounded-[1.5rem] lg:rounded-full h-12 md:h-14 w-[2.246rem] md:w-[2.808rem] lg:w-[3.369rem] lg:h-16 border-4 md:border-[0.3rem] lg:border-[0.438rem] border-title-purple'>
          {slot}
        </div>
      )}
    </div>
  );
}
