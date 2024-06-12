'use client';

import type { InputComponentProps } from '@constants/interfaces';
import { useState } from 'react';
import { useText } from '@hooks/useText';
import inputComponent from '@i18nEn/InputComponent.json';

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
  const t = useText();

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

              setValue(value);
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
            {value.length}/{maxLength}
          </div>
        </div>
        {isSubmit && (
          <div className='border border-red-500 flex items-center justify-end w-full'>
            <button
              type='submit'
              className='relative w-1/3 before:-z-10 before:size-full before:absolute before:hover:bg-black/70 before:active:bg-black/70 before:focus:bg-black/70 before:top-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:rounded-full font-bebas-neue p-2 mt-2 text-xl sm:text-3xl uppercase hover:text-title-purple active:text-white focus:text-title-purple outline-none'
            >
              {t('send', inputComponent)}
            </button>
            <div className='w-1/3 border border-green-500 h-full' />
          </div>
        )}
      </div>
    </div>
  );
}
