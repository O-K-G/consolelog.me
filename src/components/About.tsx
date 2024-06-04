'use client';

import Section from '@components/Section';
import Title from '@components/Title';
import Old from '@components/Old';
import { useState } from 'react';

export default function About() {
  const [open, setOpen] = useState(false);
  const [isTitleButtonOpen, setIsTitleButtonOpen] = useState(false);

  const handleOld = (val: boolean) => {
    const bodyClassList = document.getElementsByTagName('body')[0].classList;
    const classNameArr = ['h-[100svh]', 'lg:h-[100dvh]', 'overflow-hidden'];

    classNameArr.forEach((str) => {
      if (val) {
        bodyClassList.add(str);
      } else {
        bodyClassList.remove(str);
      }
    });
  };

  return (
    <>
      <Section backgroundClassName='bg-left-top' currentSection='about'>
        <Title
          component='h1'
          label='lorem ipsum dolor'
          labelGlowText="before:content-['lorem_ipsum_dolor']"
        />
        <Title
          component='h2'
          label='lorem ipsum dolor'
          labelGlowText="before:content-['lorem_ipsum_dolor']"
        />
        <Title
          component='h1'
          label='lorem ipsum dolor'
          labelGlowText="before:content-['lorem_ipsum_dolor']"
          isButton
          open={isTitleButtonOpen}
          onClick={() => setIsTitleButtonOpen((prevValue) => !prevValue)}
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
