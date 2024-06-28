import ArrowRightIcon from '@components/ArrowRightIcon';

export default function ArrowIconComponent() {
  return (
    <div className='relative shrink-0 center-elements size-full'>
      <ArrowRightIcon
        fillClassName='fill-black/30'
        strokeClassName='stroke-black/30'
        className='hidden fill-black/30 group-focus:block scale-150 -z-10 absolute m-auto top-0 bottom-0 right-0 left-0 size-full'
      />
      <ArrowRightIcon
        fillClassName='fill-title-purple group-hover:fill-white group-active:fill-[#75629f] group-focus:fill-title-purple'
        strokeClassName='stroke-title-purple group-hover:stroke-white group-active:stroke-[#75629f] group-focus:stroke-title-purple'
      />
    </div>
  );
}
