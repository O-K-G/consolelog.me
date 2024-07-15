import { SKILLS_LISTS } from '@constants/skillsLists';

function Column({ children }: { children: any }) {
  return (
    <div className='w-[45%] max-w-[10.047rem] sm:max-w-[auto] sm:w-[10.047rem] lg:w-[13.396rem] flex justify-start items-center flex-col gap-y-4 z-10 min-w-1/4'>
      {children}
    </div>
  );
}

function SkillBlock({ str }: { str: string }) {
  return (
    <div className='transition-300 group w-full h-[4.92225rem] lg:h-[6.563rem] p-1 shrink-0 center-elements relative before:absolute before:top-0 before:left-0 before:size-full before:bg-contact-sm before:md:bg-contact-md before:lg:bg-contact-lg before:xl:bg-contact-xl before:2xl:bg-contact-2xl before:bg-fixed before:bg-cover before:-z-10 bg-black/60 hover:bg-black/85 overflow-hidden border-2 border-title-purple'>
      <li className='size-full break-words text-center center-elements text-white font-montserrat text-sm sm:text-base md:text-xl'>
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
