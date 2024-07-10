'use client';

import Section from '@components/shared/Section';
import Title from '@components/shared/title/Title';
import { useText } from '@hooks/useText';
import projects from '@i18nEn/projects.json';
import { ClickToOpenButton } from '@components/shared/ClickToOpenButton';
import Subtitle from '@components/shared/Subtitle';
import ScrollableSubsection from '@components/shared/scrollableSection/ScrollableSubsection';

const CURRENT_SECTION = 'projects';
const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_projects']";
const SUBTITLE_GLOW_CLASSNAME = "before:content-['project_x']";
const SUBTITLE_CLASSNAME =
  'absolute top-0 w-fit h-16 sm:h-24 md:h-[6.5rem] lg:h-28 xl:h-32 2xl:h-36';
const OPEN_SIZE_CLASSNAME =
  'data-[open=true]:w-3/5 data-[open=true]:md:w-4/5 data-[open=true]:h-1/2';

export default function Projects() {
  const t = useText();

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
            className={SUBTITLE_CLASSNAME}
            label='This Webspage'
            labelGlowText="before:content-['This_webpage']"
          />
          <div className='size-full absolute center-elements'>
            <ClickToOpenButton
              openSizeClassName={OPEN_SIZE_CLASSNAME}
              alternativeLabel="This webpage is a personal just for fun project I've made for myself as a hobby."
            />
          </div>
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            className={SUBTITLE_CLASSNAME}
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            openSizeClassName={OPEN_SIZE_CLASSNAME}
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>

        <ScrollableSubsection.Item>
          <Subtitle
            className={SUBTITLE_CLASSNAME}
            label={t('subtitle', projects)}
            labelGlowText={SUBTITLE_GLOW_CLASSNAME}
          />

          <ClickToOpenButton
            openSizeClassName={OPEN_SIZE_CLASSNAME}
            alternativeLabel={t('alternativeLabel', projects)}
          />
        </ScrollableSubsection.Item>
      </ScrollableSubsection>
    </Section>
  );
}
