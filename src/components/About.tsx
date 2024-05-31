'use client';

import Section from '@components/Section';
import Title from '@components/Title';
import Old from '@components/Old';
import { useState } from 'react';

export default function About() {
  const [open, setOpen] = useState(false);

  const handleOld = (val: boolean) => {
    const bodyClassList = document.getElementsByTagName('body')[0].classList;
    if (val) {
      return ['h-[100svh]', 'lg:h-[100dvh]', 'overflow-hidden'].forEach((str) =>
        bodyClassList.add(str)
      );
    }

    return ['h-[100svh]', 'lg:h-[100dvh]', 'overflow-hidden'].forEach((str) =>
      bodyClassList.remove(str)
    );
  };

  return (
    <>
      <Section backgroundClassName='bg-left-top' currentSection='about'>
        <Title
          component='h1'
          label='lorem ipsum dolor'
          leftLabel='LOREM IPSUM DOLOR SIT CONSECTETUR'
          rightLabel='LOREM IPSUM DOLOR SIT'
        />
        <button
          type='button'
          onClick={() => {
            setOpen(true);
            handleOld(true);
          }}
          className='bg-red-500 absolute left-0 bottom-40'
        >
          TBD
        </button>
      </Section>
      {open && (
        <Old
          onClick={() => {
            handleOld(false);
            setOpen(false);
          }}
        />
      )}
    </>
  );
}
