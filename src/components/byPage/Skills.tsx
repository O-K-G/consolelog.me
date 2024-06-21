import Section from '@components/shared/Section';
import Title from '@components/title/Title';
import skills from '@i18nEn/skills.json';
import { useText } from '@hooks/useText';

const MAIN_TITLE_GLOW_CLASSNAME = "before:content-['my_skills']";
const SUBTITLE_GLOW_CLASSNAME =
  "before:content-['here_is_a_list_of_some_of_my_skills']";

const arr = [
  'ltrdjukygf utfbyt dbyj1',
  'ltrdjukygf utfbyt dbyj2',
  'ltrdjukygf utfbyt dbyj3',
  'ltrdjukygf utfbyt dbyj4',
  'ltrdjukygf utfbyt dbyj5',
  'ltrdjukygf utfbyt dbyj6',
  'ltrdjukygf utfbyt dbyj7',
  'ltrdjukygf utfbyt dbyj8',
  'ltrdjukygf utfbyt dbyj9',
  'ltrdjukygf utfbyt dbyj11',
  'ltrdjukygf utfbyt dbyj111',
  'ltrdjukygf utfbyt dbyj12',
  'ltrdjukygf utfbyt dbyj13',
  'ltrdjukygf utfbyt dbyj14',
  'ltrdjukygf utfbyt db15yj',
  'ltrdjukygf utfbyt 5dbyj',
  'ltrdjukygf utfbdyt dbyj',
  'ltrdjukygf utfbyt5 dbyj',
  'ltrdjukygf utfby6t dbyj',
  'ltrdjukygf utfb7yt dbyj',
  'ltrdjukygf utfb8yt dbyj',
  'ltrdjukygf utf9byt dbyj',
];

const arr1 = [
  'sltrdjukygf utfbyt dbyj1',
  'ltrfdjukygf utfbyt dbyj2',
  'ltdrdjukygf utfbyt dbyj3',
  'ltrdgjukygf utfbyt dbyj4',
  'ltrdjhukygf utfbyt dbyj5',
  'ltrdjujkygf utfbyt dbyj6',
  'ltrdjukcygf utfbyt dbyj7',
  'ltrdjukysgf utfbyt dbyj8',
  'ltrdjukygsf utfbyt dbyj9',
  'ltrdjukygff utfbyt dbyj11',
  'ltrdjukygf gutfbyt dbyj111',
  'ltrdjukygf uhtfbyt dbyj12',
  'ltrdjukygf utjfbyt dbyj13',
  'ltrdjukygf utfkbyt dbyj14',
  'ltrdjukygf utfbhgyt db15yj',
  'ltrdjukygf utfbytf 5dbyj',
  'ltrdjukygf utfbdytd dbyj',
  'ltrdjukygf utfbyt5 sdbyj',
  'ltrdjukygf utfby6t dwbyj',
  'ltrdjukygf utfb7yt ddrbyj',
  'ltrefdjukygf utfb8yt dbyj',
  'ltrdjwrukygf utf9byt dbyj',
];

const arr2 = [
  'sfltrdjukygf utfbyt dbyj1',
  'ltgrfdjukygf utfbyt dbyj2',
  'ltdhrdjukygf utfbyt dbyj3',
  'ltrdhgjukygf utfbyt dbyj4',
  'ltrdjjhukygf utfbyt dbyj5',
  'ltrdjukjkygf utfbyt dbyj6',
  'ltrdjukklcygf utfbyt dbyj7',
  'ltrdjukysgfl utfbyt dbyj8',
  'ltrdjukygllsf utfbyt dbyj9',
  'ltrdjukygff futfbyt dbyj11',
  'ltrdjukygf gudtfbyt dbyj111',
  'ltrdjukygf uhtdfbyt dbyj12',
  'ltrdjukygf utjfdbyt dbyj13',
  'ltrdjukygf utfkbdyt dbyj14',
  'ltrdjukygf utfbhgddyt db15yj',
  'ltrdjukygf utfbytf d5dbyj',
  'ltrdjukygf utfbdytd ddbyj',
  'ltrdjukygf utfbyt5 sddbyj',
  'ltrdjukygf utfby6t dwbdyj',
  'ltrdjukygf utfb7yt ddrbsdyj',
  'ltrefdjuksygf utfb8yt dbyj',
  'ltrdjwrukydgf utf9byt dbyj',
];
const arr3 = [
  'sfldtrdjukygf utfbyt dbyj1',
  'ltgrffdjukygf utfbyt dbyj2',
  'ltdhrgdjukygf utfbyt dbyj3',
  'ltrdhgjhukygf utfbyt dbyj4',
  'ltrdjjhhukygf utfbyt dbyj5',
  'ltrdjukjjkygf utfbyt dbyj6',
  'ltrdjukklkcygf utfbyt dbyj7',
  'ltrdjukysglfl utfbyt dbyj8',
  'ltrdjukyglls;f utfbyt dbyj9',
  'ltrdjukygff; futfbyt dbyj11',
  'ltrdjukygf gufdtfbyt dbyj111',
  'ltrdjukygf uhtddfbyt dbyj12',
  'ltrdjukygf utjfsdbyt dbyj13',
  'ltrdjukygf utfkbsdyt dbyj14',
  'ltrdjukygf utfbhgxddyt db15yj',
  'ltrdjukygf utfbytff d5dbyj',
  'ltrdjukygf utfbdytdg ddbyj',
  'ltrdjukygf utfbyt5 shddbyj',
  'ltrdjukygf utfby6t dwubdyj',
  'ltrdjukygf utfb7yt ddribsdyj',
  'ltrefdjuksygf utfb8yt dobyj',
  'ltrdjwrukydgf utf9byt dblyj',
];

function Column({ children }: { children: any }) {
  return (
    <div className='flex justify-start items-center flex-col gap-y-4 z-10 min-w-1/4'>
      {children}
    </div>
  );
}

function SkillBlock({ str }: { str: string }) {
  return (
    <div className='w-[10.047rem] h-[4.92225rem] lg:w-[13.396rem] lg:h-[6.563rem] text-white font-montserrat text-base md:text-xl shrink-0 text-center center-elements bg-black/30 break-words overflow-hidden border-2 border-title-purple'>
      {str}
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
      <div className='flex items-start justify-center flex-wrap gap-x-4 h-full overflow-y-auto'>
        <Column>
          {arr.map((str) => (
            <SkillBlock key={str} str={str} />
          ))}
        </Column>
        <Column>
          {arr1.map((str) => (
            <SkillBlock key={str} str={str} />
          ))}
        </Column>
        <Column>
          {arr2.map((str) => (
            <SkillBlock key={str} str={str} />
          ))}
        </Column>
        <Column>
          {arr3.map((str) => (
            <SkillBlock key={str} str={str} />
          ))}
        </Column>
      </div>
    </Section>
  );
}
