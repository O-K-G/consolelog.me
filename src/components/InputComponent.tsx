'use client';

import type { InputComponentProps } from '@constants/interfaces';
import BottomInputComponentButtons from '@components/BottomInputComponentButtons';

export default function InputComponent({
  component: Component = 'input',
  id,
  placeholder,
  maxLength,
  rows,
  isSubmit,
  onClick,
  value,
  onChange,
}: InputComponentProps) {
  const isTextarea = Component === 'textarea';

  return (
    <div className='w-full text-white sm:gap-6 flex flex-col items-start sm:flex-row justify-center overflow-hidden'>
      <div className='flex items-center justify-start sm:justify-end sm:mt-1.5 sm:w-2/12 md:w-3/12 md:max-w-24'>
        <label
          htmlFor={id}
          className='uppercase font-bebas-neue text-xl sm:text-3xl'
        >
          {id}:
        </label>
      </div>
      <div className='center-elements flex-col w-full'>
        <div className='w-full flex flex-col items-end justify-center'>
          <Component
            type='text'
            onChange={(e) => {
              const {
                target: { value },
              } = e;

              onChange(value);
            }}
            value={value}
            maxLength={maxLength}
            id={id}
            name={id}
            className={`w-full placeholder:uppercase text-xl placeholder:text-white/30 font-montserrat placeholder:font-bebas-neue outline-none bg-title-purple/30 hover:bg-black/70 active:bg-black/70 focus:bg-black/70 ${
              !isTextarea ? 'h-[3.188rem] px-4' : 'p-4 resize-none'
            }`}
            placeholder={placeholder}
            rows={rows}
          />
          <div className='font-bebas-neue text-base'>
            {!value ? maxLength : maxLength - value.length}
          </div>
        </div>
        {isSubmit && <BottomInputComponentButtons onClick={onClick} />}
      </div>
    </div>
  );
}
