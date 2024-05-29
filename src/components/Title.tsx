import type { TitleProps } from '@constants/interfaces';

interface CharacterProps {
  character: string | number;
  widthClassName: string;
}

function Character({ character, widthClassName }: CharacterProps) {
  // TODO: Check if aria-hidden should move to the parent div instead of the two children.

  return (
    <div className={`relative min-h-16 lg:min-h-28 ${widthClassName}`}>
      <div className='select-none pointer-events-none title-character blur-sm scale-[1.05]'>
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
}: TitleProps) {
  const charactersArr = label?.split('').map((str, index) => ({
    id: index,
    str,
  }));

  return (
    <div className='center-elements flex-wrap px-2 lg:px-8 overflow-hidden'>
      <Component className='sr-only'>{label}</Component>
      {charactersArr?.map(({ id, str }) => {
        const isI = str === 'i' || str === 'I';

        return (
          <Character
            widthClassName={isI ? 'w-4 lg:w-8' : 'w-8 lg:w-16'}
            key={`character-${label}-${str}-${id}`}
            character={str}
          />
        );
      })}
    </div>
  );
}
