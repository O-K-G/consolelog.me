'use client';

import Section from '@components/shared/Section';
import Title from '@components/title/Title';
// import Old from '@components/Old';
import { useState } from 'react';
import type { TitleProps } from '@constants/interfaces';
import Attribution from '@components/Attribution';
import { useText } from '@hooks/useText';
import about from '@i18nEn/about.json';
import ContactMeButton from '@components/shared/ContactMeButton';
// import { useDisableScroll } from '@hooks/useDisableScroll';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['lorem_ipsum_dolor']";
const SUBTITLE_GLOW_CLASSNAME = "before:content-['lorem_ipsum_dolor']";
const CLICK_TO_OPEN_GLOW_CLASSNAME = "before:content-['click_to_open']";

export default function About() {
  // const [open, setOpen] = useState(false);
  const t = useText();
  const [isTitleButtonOpen, setIsTitleButtonOpen] = useState(false);
  // const { handleDisableScroll } = useDisableScroll();

  return (
    <>
      <Section
        className='gap-10'
        backgroundClassName='bg-left-top'
        currentSection='about'
      >
        {(
          [
            {
              id: 0,
              component: 'h1',
              label: t('mainTitle', about),
              labelGlowText: MAIN_TITLE_GLOW_CLASSNAME,
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
              labelGlowText: SUBTITLE_GLOW_CLASSNAME,
            },
            {
              id: 2,
              label: t('clickToOpen', about),
              labelGlowText: CLICK_TO_OPEN_GLOW_CLASSNAME,
              alternatingButtonsAriaLabelPrefix: t(
                'alternativeLabelAriaLabel',
                about
              ),
              alternativeLabel: t('alternativeLabel', about),
              isButton: true,
              open: isTitleButtonOpen,
              textStrokeClassName: 'title-text-stroke-white',
              onClick: () => setIsTitleButtonOpen((prevValue) => !prevValue),
              className:
                'w-24 h-20 sm:w-36 sm:h-28 md:w-44 md:h-32 lg:w-52 lg:h-40 data-[open=true]:w-3/4 data-[open=true]:h-[40%] data-[open=true]:lg:h-1/3 border sm:border-2 md:border-[0.188rem] data-[open=true]:border-title-purple',
            },
          ] as TitleProps[]
        ).map(({ id, ...rest }) => (
          <Title key={`about-title-${id}`} {...rest} />
        ))}

        <ContactMeButton />

        {/* <button
          type='button'
          onClick={() => {
            setOpen(true);
            handleDisableScroll(true);
          }}
          className='bg-red-500 absolute right-0 bottom-40'
        >
          TBD
        </button> */}
        <Attribution />
      </Section>
      {/* {open && (
        <Old
          onClick={() => {
            handleDisableScroll(false);
            setOpen(false);
          }}
        />
      )} */}
    </>
  );
}
