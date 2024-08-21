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
      className='data-[last-item=true]:hidden data-[last-item=true]:sm:block transition-300 bg-black/30 hover:bg-black/70 w-1/4 lg:w-[10rem] h-10 sm:h-16 lg:h-20 center-elements overflow-hidden border-2 border-title-purple'
    >
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
