import type { BottomComponentProps } from '@constants/interfaces';

export default function BottomComponent({
  label,
  slot,
  className = 'right-0 mr-4',
  children,
}: BottomComponentProps) {
  return (
    <div
      className={`fixed bottom-0 mb-4 w-[2.246rem] md:w-[2.808rem] lg:w-[3.369rem] h-fit center-elements flex-col ${className}`}
    >
      <div className='uppercase whitespace-nowrap text-title-purple text-base md:text-xl lg:text-2xl text-center w-full font-bebas-neue'>
        {label}
      </div>
      {!children ? (
        <div className='p-0.5 flex items-start justify-center rounded-2xl md:rounded-[1.5rem] lg:rounded-full h-12 md:h-14 w-full lg:h-16 border-4 md:border-[0.3rem] lg:border-[0.438rem] border-title-purple'>
          {slot}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
