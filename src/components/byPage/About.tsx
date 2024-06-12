'use client';

import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import Old from '@components/Old';
import { useState } from 'react';
import type { TitleProps } from '@constants/interfaces';
import Attribution from '@components/Attribution';
import { useText } from '@hooks/useText';
import about from '@i18nEn/about.json';
import ContactMeButton from '@components/shared/ContactMeButton';

export default function About() {
  const [open, setOpen] = useState(false);
  const t = useText();
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
              label: t('mainTitle', about),
              labelGlowText: "before:content-['lorem_ipsum_dolor']",
              topLabel: t('topLabel', about),
              bottomLabel: t('bottomLabel', about),
              border: true,
              className:
                'mt-8 sm:mt-0 w-fit h-16 sm:h-24 md:h-[6.5rem] lg:h-28 xl:h-32 2xl:h-36',
            },
            {
              id: 1,
              component: 'h2',
              label: t('subtitle', about),
              labelGlowText: "before:content-['lorem_ipsum_dolor']",
            },
            {
              id: 2,
              label: t('clickToOpen', about),
              labelGlowText: "before:content-['click_to_open']",
              alternativeLabel: t('alternativeLabel', about),
              isButton: true,
              open: isTitleButtonOpen,
              onClick: () => setIsTitleButtonOpen((prevValue) => !prevValue),
              className:
                'w-[33.333333svw] h-[33.333333svw] sm:w-[25svw] sm:h-[25svw] md:w-[20dvw] md:h-[20dvw] data-[open=true]:w-3/4 data-[open=true]:h-[40%] data-[open=true]:lg:h-1/3 border sm:border-2 md:border-[0.188rem] data-[open=true]:border-title-purple',
            },
          ] as TitleProps[]
        ).map(({ id, ...rest }) => (
          <Title key={`about-title-${id}`} {...rest} />
        ))}

        <ContactMeButton />

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
