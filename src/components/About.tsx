'use client';

import Section from '@components/Section';
import Title from '@components/Title';
import Old from '@components/Old';
import { useState } from 'react';
import type { TitleProps } from '@constants/interfaces';

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
              isButton: true,
              open: isTitleButtonOpen,
              onClick: () => setIsTitleButtonOpen((prevValue) => !prevValue),
              className:
                'w-full max-w-[10rem] sm:max-w-[11rem] h-20 sm:h-24 md:h-28 lg:h-36 lg:max-w-[17rem]',
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
