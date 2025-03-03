import { SKILLS_LISTS } from "@constants/skillsLists";
import { SkillBlockProps, SkillsListRowProps } from "@constants/interfaces";

const CLASSNAME_BY_ROW = {
  row1: "row-3 row-3-polyfill",
  row2: "row-4 row-4-polyfill",
  row3: "row-5 row-5-polyfill",
  row4: "row-6 row-6-polyfill",
  mobileRow: "sm:hidden flex-wrap row-7 row-7-polyfill",
} as const;

function Row({ children, className = "" }: SkillsListRowProps) {
  return (
    <ul
      dir="ltr"
      className={`animate-skills animate-skills-polyfill fixed top-[110vh] left-0 w-full center-elements gap-4 px-4 ${className}`}
    >
      {children}
    </ul>
  );
}

function SkillBlock({
  str,
  "data-visible-mobile": visibleMobile,
}: SkillBlockProps) {
  return (
    <li
      data-visible-mobile={visibleMobile}
      className="relative before:-z-10 before:bg-slate-800/70 shadow-xs shadow-black rounded-xl before:top-0 before:left-0 before:size-full text-fill-transparent before:absolute bg-gradient-skills bg-clip-text bg-[400%_auto] bg-[right_center] hover:bg-[left_center] hover:text-[#ef9671] last:hidden data-[visible-mobile=true]:last:flex sm:last:flex transition-1000 w-1/3 sm:w-1/4 lg:w-[10rem] h-10 sm:h-16 lg:h-20 center-elements overflow-hidden break-words text-center text-white font-montserrat text-sm sm:text-base md:text-xl"
    >
      {str}
    </li>
  );
}

export default function SkillsList() {
  return SKILLS_LISTS.map((row) => {
    const key = Object.keys(row)[0];
    const rowItems = row[key as keyof typeof row] as string[];
    const rowClassName = `animate-skills ${
      CLASSNAME_BY_ROW[key as keyof typeof CLASSNAME_BY_ROW]
    }`;

    return (
      <Row key={`skills-${key}`} className={rowClassName}>
        {rowItems.map((str: string) => (
          <SkillBlock
            data-visible-mobile={key === "mobileRow" && str === rowItems[3]}
            key={`skill-item-${str}`}
            str={str}
          />
        ))}
      </Row>
    );
  });
}
