'use client';

import type { InputComponentProps } from '@constants/interfaces';
import { useState } from 'react';

export default function InputComponent({
  component: Component = 'input',
  id,
  placeholder,
  maxLength,
  rows,
  isSubmit,
}: InputComponentProps) {
  const isTextarea = Component === 'textarea';
  const [value, setValue] = useState('');

  return (
    <div className='w-full text-white sm:gap-6 flex flex-col items-start sm:flex-row justify-center'>
      <div className='flex items-center justify-start sm:justify-end sm:mt-1.5 sm:w-2/12 md:w-3/12 md:max-w-24'>
        <label
          htmlFor='email'
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

              setValue(value);
            }}
            value={value}
            maxLength={maxLength}
            id={id}
            name={id}
            className={`w-full placeholder:uppercase text-xl placeholder:text-white/30 font-montserrat placeholder:font-bebas-neue outline-none bg-title-purple/30 focus:bg-black/70 ${
              !isTextarea ? 'h-[3.188rem] px-4' : 'p-4 resize-none'
            }`}
            placeholder={placeholder}
            rows={rows}
          />
          <div className='font-bebas-neue text-base'>
            {value.length}/{maxLength}
          </div>
        </div>
        {isSubmit && (
          <button
            type='submit'
            className='font-bebas-neue p-2 mt-2 text-xl sm:text-3xl uppercase hover:text-title-purple active:text-[#75629f] focus:text-title-purple outline-none'
          >
            SEND
          </button>
        )}
      </div>
    </div>
  );
}
