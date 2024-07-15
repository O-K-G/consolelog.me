import { SKILLS_LISTS } from '@constants/skillsLists';
import SectionBackground from '@components/shared/SectionBackground';

function Column({ children }: { children: any }) {
  return (
    <div className='w-[45%] max-w-[10.047rem] sm:max-w-[auto] sm:w-[10.047rem] lg:w-[13.396rem] flex justify-start items-center flex-col gap-y-4 z-10 min-w-1/4'>
      {children}
    </div>
  );
}

function SkillBlock({ str }: { str: string }) {
  return (
    <div className='transition-300 bg-black relative group w-full h-[4.92225rem] lg:h-[6.563rem] p-1 shrink-0 center-elements overflow-hidden border-2 border-title-purple'>
      <SectionBackground currentSection='contact' />
      <li className='z-10 size-full break-words text-center center-elements text-white font-montserrat text-sm sm:text-base md:text-xl'>
        {str}
      </li>
    </div>
  );
}

export default function SkillsList() {
  return (
    <ul className='flex items-start justify-center flex-wrap p-2.5 gap-4 h-full'>
      {SKILLS_LISTS.map((obj) => {
        const col = Object.keys(obj)[0];

        return (
          <Column key={col}>
            {(obj[col as keyof typeof obj] as string[]).map((str) => (
              <SkillBlock key={str} str={str} />
            ))}
          </Column>
        );
      })}
    </ul>
  );
}
