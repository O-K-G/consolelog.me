import ScrollIcon from '@components/icons/ScrollIcon';

export default function ScrollIconComponent() {
  return (
    <div className='fixed center-elements flex-col h-16 overflow-hidden md:h-[4.5rem] lg:h-24 bottom-0 right-0 mr-4 mb-4'>
      <div className='uppercase text-title-purple text-base md:text-xl lg:text-2xl text-center w-full font-bebas-neue'>
        SCROLL
      </div>
      <ScrollIcon className='h-full stroke-title-purple fill-title-purple' />
    </div>
  );
}
