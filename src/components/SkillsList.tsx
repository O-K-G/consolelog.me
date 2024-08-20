import { SKILLS_LISTS } from '@constants/skillsLists';
import { type ReactNode } from 'react';
// TODO: Delete Old types.

const CLASSNAME_BY_ROW = {
  row1: 'animate-skills-1 animate-skills-1-polyfill',
  row2: 'animate-skills-2 animate-skills-2-polyfill',
  row3: 'animate-skills-3 animate-skills-3-polyfill',
  row4: 'animate-skills-4 animate-skills-4-polyfill',
} as const;

function Row({
  children,
  className = '',
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`animate-skills fixed top-[110vh] left-0 w-full center-elements gap-1 px-4 ${className}`}
    >
      {children}
    </div>
  );
}

function SkillBlock({ str }: { str: string }) {
  return (
    <li className='transition-300 bg-black/30 hover:bg-black/70 w-full lg:w-[10rem] h-16 lg:h-20 center-elements overflow-hidden border-2 border-title-purple'>
      <div className='size-full break-words text-center center-elements text-white font-montserrat text-sm sm:text-base md:text-xl'>
        {str}
      </div>
    </li>
  );
}

export default function SkillsList() {
  return SKILLS_LISTS.map((row) => {
    const key = Object.keys(row)[0];
    const rowItems = row[key as keyof typeof row] as string[];
    const rowClassName = CLASSNAME_BY_ROW[key as keyof typeof CLASSNAME_BY_ROW];

    return (
      <Row
        key={`skills-${key}`}
        className={`animate-view-polyfill ${rowClassName}`}
      >
        {rowItems.map((str: string) => (
          <SkillBlock key={`skill-item-${str}`} str={str} />
        ))}
      </Row>
    );
  });
}
