import type { TitleBorderProps, TitleProps } from '@constants/interfaces';

interface CharacterProps {
  character: string | number;
  widthClassName: string;
}

function TitleBorder({ leftLabel, rightLabel, className }: TitleBorderProps) {
  const titleBorderClassName =
    'absolute top-0 left-0 size-full border-2 border-title-purple';

  return (
    <div
      className={`text-title-purple uppercase text-base lg:text-xl font-star-date-81316 whitespace-nowrap center-elements gap-2 w-full ${className}`}
    >
      {leftLabel && <span className='leading-none pt-0.5'>{leftLabel}</span>}
      <div className='center-elements relative w-full h-3 lg:h-3.5'>
        <div className={`${titleBorderClassName} blur-sm border-[1.5px]`} />
        <div className={titleBorderClassName} />
      </div>
      {rightLabel && <span className='leading-none pt-0.5'>{rightLabel}</span>}
    </div>
  );
}

function Character({ character, widthClassName }: CharacterProps) {
  // TODO: Check if aria-hidden should move to the parent div instead of the two children.

  return (
    <div className={`relative min-h-9 lg:min-h-16 lowercase ${widthClassName}`}>
      <div className='select-none pointer-events-none title-character blur-[2px] lg:blur-sm scale-[1.05]'>
        <div aria-hidden className='center-elements size-full'>
          {character}
        </div>
      </div>
      <div className='title-character'>
        <div aria-hidden className='center-elements size-full'>
          {character}
        </div>
      </div>
    </div>
  );
}

export default function Title({
  component: Component = 'h2',
  label,
  leftLabel,
  rightLabel,
}: TitleProps) {
  const charactersArr = label?.split('').map((str, index) => ({
    id: index,
    str,
  }));

  const paddingClassName = 'px-2 lg:px-8';

  return (
    <div className='flex-col center-elements mt-4 lg:mt-28'>
      <TitleBorder rightLabel={rightLabel} className={paddingClassName} />
      <div
        className={`center-elements mt-1 flex-wrap overflow-hidden ${paddingClassName}`}
      >
        <Component className='sr-only'>{label}</Component>
        {charactersArr?.map(({ id, str }) => {
          const isI = str === 'i' || str === 'I';

          return (
            <Character
              widthClassName={isI ? 'w-3 lg:w-4' : 'w-5 lg:w-8'}
              key={`character-${label}-${str}-${id}`}
              character={str}
            />
          );
        })}
      </div>
      <TitleBorder leftLabel={leftLabel} className={paddingClassName} />
    </div>
  );
}
