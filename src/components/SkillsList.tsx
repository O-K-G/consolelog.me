import { SKILLS_LISTS } from '@constants/skillsLists';

function Column({ children }: { children: any }) {
  return (
    <ul className='w-[45%] max-w-[10.047rem] sm:max-w-[auto] sm:w-[10.047rem] lg:w-[13.396rem] flex justify-start items-center flex-col gap-y-4 z-10 min-w-1/4'>
      {children}
    </ul>
  );
}

function SkillBlock({ str }: { str: string }) {
  return (
    <li className='transition-300 bg-black/30 hover:bg-black/70 w-full h-[4.92225rem] lg:h-[6.563rem] p-1 shrink-0 center-elements overflow-hidden border-2 border-title-purple'>
      <div className='size-full break-words text-center center-elements text-white font-montserrat text-sm sm:text-base md:text-xl'>
        {str}
      </div>
    </li>
  );
}

export default function SkillsList() {
  return (
    <div className='flex items-start justify-center flex-wrap p-2.5 gap-4 h-full'>
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
    </div>
  );
}
