import type { FixedBottomComponentProps } from '@constants/interfaces';

export default function FixedBottomComponent({
  label,
  slot,
  className = 'ltr:right-0 ltr:mr-4 rtl:left-0 rtl:ml-4',
  children,
}: FixedBottomComponentProps) {
  return (
    <div
      className={`fixed bottom-0 mb-4 center-elements flex-col ${className}`}
    >
      <div className='uppercase whitespace-nowrap text-title-purple text-base md:text-xl lg:text-2xl text-center w-full info-text-font-classNames'>
        {label}
      </div>
      {children ?? (
        <div className='p-0.5 flex items-start justify-center rounded-2xl md:rounded-[1.5rem] lg:rounded-full h-12 md:h-14 w-[2.246rem] md:w-[2.808rem] lg:w-[3.369rem] lg:h-16 border-4 md:border-[0.3rem] lg:border-[0.438rem] border-title-purple'>
          {slot}
        </div>
      )}
    </div>
  );
}
