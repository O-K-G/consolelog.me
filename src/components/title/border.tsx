import type { BorderProps } from '@constants/interfaces';

export default function Border({ leftLabel, label }: BorderProps) {
  return (
    <div className='w-full h-2.5 sm:h-3 md:h-3.5 lg:h-4 xl:h-4.5 2xl:h-5'>
      <div
        className={`text-title-purple relative size-full flex items-center gap-4 justify-between ${
          leftLabel ? 'flex-row-reverse' : ''
        }`}
      >
        <div className='relative size-full'>
          <div className='border sm:border-2 border-title-purple size-full before:border before:sm:border-2 before:absolute before:top-0 before:-left-[0.05rem] before:bottom-0 before:right-0 before:m-auto before:border-title-purple before:h-[110%] before:w-[101%] lg:before:w-[100.5%] before:blur-[0.125rem]' />
        </div>
        {label && (
          <span className='text-sm z-10 sm:text-base md:text-lg lg:text-xl xl:text-[1.5rem] xl:leading-8 2xl:text-3xl pt-[0.120rem] font-star-date-81316 uppercase whitespace-nowrap'>
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
