'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import projects from '@i18nEn/projects.json';
// import { ClickToOpenButton } from '@components/shared/ClickToOpenButton';
import Subtitle from '@components/shared/Subtitle';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';
import { useState } from 'react';

const CURRENT_SECTION = 'projects';
const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_projects']";
const SUBTITLE_GLOW_CLASSNAME = "before:content-['project_x']";

// const OPEN_SIZE_CLASSNAME =
//   'data-[open=true]:w-3/5 data-[open=true]:md:w-4/5 data-[open=true]:h-1/2';

export default function Projects() {
  const t = useText();
  const [open, setOpen] = useState(false);

  return (
    <Section currentSection={CURRENT_SECTION}>
      <Title
        label={t('mainTitle', projects)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />
      <ScrollableSubsection>
        <ScrollableSubsection.Item>
          {/* TODO: Expand content and move to a JSON. */}
          <Subtitle
            label='This Webpage'
            labelGlowText="before:content-['This_Webpage']"
          />
          <div className='container-type-size size-full relative max-h-[80%] center-elements border border-blue-500'>
            {/* <div className='border border-blue-500 size-' /> */}
            <button
              onClick={() => setOpen((prevValue) => !prevValue)}
              type='button'
              className={`transition-1000 border border-red-500 max-h-full center-elements ${
                !open ? 'w-1/2 h-[50cqw]' : 'w-full h-[100cqw]'
              }`}
            >
              xxx
            </button>
          </div>
          {/* <div className='size-full absolute center-elements'>
            <ClickToOpenButton
              openSizeClassName={OPEN_SIZE_CLASSNAME}
              alternativeLabel="This webpage is a personal just for fun project I've made for myself as a hobby."
            />
          </div> */}
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          {/* <ClickToOpenButton
            openSizeClassName={OPEN_SIZE_CLASSNAME}
            alternativeLabel={t('alternativeLabel', projects)}
          /> */}
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          {/* <ClickToOpenButton
            openSizeClassName={OPEN_SIZE_CLASSNAME}
            alternativeLabel={t('alternativeLabel', projects)}
          /> */}
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    </Section>
  );
}
