import type { TitleProps } from '@constants/interfaces';

interface CharacterProps {
  character: string | number;
  widthClassName: string;
}

function Character({ character, widthClassName }: CharacterProps) {
  return (
    <div className={`relative ${widthClassName}`}>
      <div
        aria-hidden
        className='select-none pointer-events-none title-character blur-sm scale-[1.05]'
      >
        {character}
      </div>
      <div aria-hidden className='title-character'>
        {character}
      </div>
    </div>
  );
}

export default function Title({
  component: Component = 'h2',
  label,
}: TitleProps) {
  const charactersArr = label.split('').map((str, index) => ({
    id: index,
    str,
  }));

  return (
    <div className='flex items-center justify-center'>
      <Component className='sr-only'>{label}</Component>
      {charactersArr.map(({ id, str }) => {
        const isI = str === 'i' || str === 'I';

        return (
          <Character
            widthClassName={isI ? 'w-8' : 'w-16'}
            key={`character-${label}-${str}-${id}`}
            character={str}
          />
        );
      })}
    </div>
  );
}
