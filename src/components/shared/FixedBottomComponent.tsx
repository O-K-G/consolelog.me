import type { FixedBottomComponentProps } from '@/constants/interfaces';

export default function FixedBottomComponent({
  label,
  slot,
  className = 'right-0 mr-4',
}: FixedBottomComponentProps) {
  return (
    <div
      className={`fixed center-elements flex-col h-20 overflow-hidden md:h-[4.5rem] lg:h-24 bottom-0 mb-4 ${className}`}
    >
      <div className='uppercase text-title-purple text-base md:text-xl lg:text-2xl text-center w-full font-bebas-neue'>
        {label}
      </div>
      {slot}
    </div>
  );
}
