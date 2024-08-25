import { SKILLS_LISTS } from '@constants/skillsLists';
import type {
  SkillBlockProps,
  SkillsListRowProps,
} from '@constants/interfaces';

const CLASSNAME_BY_ROW = {
  row1: 'animate-skills-3 animate-skills-3-polyfill',
  row2: 'animate-skills-4 animate-skills-4-polyfill',
  row3: 'animate-skills-5 animate-skills-5-polyfill',
  row4: 'animate-skills-6 animate-skills-6-polyfill',
  mobileRow: 'animate-skills-7 animate-skills-7-polyfill',
} as const;

function Row({
  children,
  className = '',
  'data-mobile': dataIsMobile,
}: SkillsListRowProps) {
  return (
    <ul
      dir='ltr'
      data-mobile={dataIsMobile}
      className={`data-[mobile=true]:sm:hidden data-[mobile=true]:flex-wrap animate-skills animate-skills-polyfill fixed top-[110vh] left-0 w-full center-elements gap-4 px-4 ${className}`}
    >
      {children}
    </ul>
  );
}

function SkillBlock({ str, 'data-last-item': lastItem }: SkillBlockProps) {
  return (
    <li
      data-last-item={lastItem}
      className='relative before:-z-10 before:bg-slate-800/40 shadow-sm shadow-black rounded-xl before:top-0 before:left-0 before:size-full text-fill-transparent before:absolute bg-gradient-skills bg-clip-text bg-[400%_auto] bg-[right_center] hover:bg-[left_center] hover:text-[#ef9671] data-[last-item=true]:hidden data-[last-item=true]:sm:flex transition-1000 w-1/3 sm:w-1/4 lg:w-[10rem] h-10 sm:h-16 lg:h-20 center-elements overflow-hidden break-words text-center text-white font-montserrat text-sm sm:text-base md:text-xl'
    >
      {str}
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
        data-mobile={key === 'mobileRow'}
        className={rowClassName}
      >
        {rowItems.map((str: string) => (
          <SkillBlock
            data-last-item={key !== 'mobileRow' && str === rowItems[3]}
            key={`skill-item-${str}`}
            str={str}
          />
        ))}
      </Row>
    );
  });
}
