import { SKILLS_LISTS } from '@constants/skillsLists';

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

export default function SkillsList() {
  return (
    <ul className='flex items-start justify-center flex-wrap gap-4 h-full overflow-y-auto'>
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
