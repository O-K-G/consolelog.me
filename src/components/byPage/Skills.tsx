import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_skills']";
const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

function Column({ children }: { children: any }) {
  return (
    <div className='flex justify-start items-center flex-col gap-y-4 z-10 min-w-1/4'>
      {children}
    </div>
  );
}

function SkillBlock({ str }: { str: string }) {
  return (
    <div className='group w-[10.047rem] h-[4.92225rem] lg:w-[13.396rem] lg:h-[6.563rem] p-1 shrink-0 center-elements bg-black/30 hover:bg-black/70 overflow-hidden border-2 border-title-purple'>
      <li className='transition-300 size-full group-hover:scale-110 break-words text-center center-elements text-white font-montserrat text-base md:text-xl'>
        {str}
      </li>
    </div>
  );
}

export default function Skills() {
  const t = useText();

  return (
    <Section backgroundClassName='bg-center' currentSection='skills'>
      <Title
        label={t('mainTitle', skills)}
        labelGlowText={MAIN_TITLE_GLOW_CLASSNAME}
        border
      />

      <Title
        label={t('subtitle', skills)}
        labelGlowText={SUBTITLE_GLOW_CLASSNAME}
        beforeBlurClassName='before:blur-[0.01rem] lg:before:blur-[2rem]'
        fontClassName='font-bebas-neue'
        textSizeClassName='text-2xl sm:text-3xl lg:text-5xl xl:text-7xl'
        textColorClassName='text-white before:lg:text-title-purple'
        beforeTextStrokeClassName='title-text-stroke-purple-narrow-dark'
      />
      <ul className='flex items-start justify-center flex-wrap gap-4 h-full overflow-y-auto'>
        <Column>
          {['React.js', 'Next.js', 'Node.js', 'Express.js'].map((str) => (
            <SkillBlock key={str} str={str} />
          ))}
        </Column>
        <Column>
          {['Tailwind CSS', 'Async JS', 'TypeScript', 'Zod'].map((str) => (
            <SkillBlock key={str} str={str} />
          ))}
        </Column>
        <Column>
          {['Microservices', 'Agile methodology', 'REST API', 'MongoDB'].map(
            (str) => (
              <SkillBlock key={str} str={str} />
            )
          )}
        </Column>
        <Column>
          {['Responsive web design', 'i18n', 'A11y', 'Unit tests'].map(
            (str) => (
              <SkillBlock key={str} str={str} />
            )
          )}
        </Column>
      </ul>
    </Section>
  );
}
