'use client';

import Section from '@components/Section';
import Title from '@components/Title';
import Old from '@components/Old';
import { useState } from 'react';
import type { TitleProps } from '@constants/interfaces';
import Attribution from '@components/Attribution';

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
        {(
          [
            {
              id: 0,
              component: 'h1',
              label: 'lorem ipsum dolor',
              labelGlowText: "before:content-['lorem_ipsum_dolor']",
              topLabel: 'lorem ipsum dolor',
              bottomLabel: 'lorem ipsum dolor',
              border: true,
            },
            {
              id: 1,
              component: 'h2',
              label: 'lorem ipsum dolor',
              labelGlowText: "before:content-['lorem_ipsum_dolor']",
            },
            {
              id: 2,
              label: 'click to open',
              labelGlowText: "before:content-['click_to_open']",
              alternativeLabel: 'Todo Todo',
              isButton: true,
              open: isTitleButtonOpen,
              onClick: () => setIsTitleButtonOpen((prevValue) => !prevValue),
              className:
                'w-[11rem] data-[open=true]:w-full data-[open=true]:sm:w-3/4 lg:w-1/4 h-1/6 data-[open=true]:h-[40%] sm:h-1/5 lg:h-1/5 data-[open=true]:lg:h-1/3 border-[0.188rem] data-[open=true]:border-title-purple',
            },
          ] as TitleProps[]
        ).map(({ id, ...rest }) => (
          <Title key={`about-title-${id}`} {...rest} />
        ))}

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
        <Attribution />
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
