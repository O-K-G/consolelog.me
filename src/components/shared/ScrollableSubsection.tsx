import type { ScrollableSubsectionProps } from '@constants/interfaces';
import useHandleSidescroll from '@/hooks/useHandleSidescroll';

export default function ScrollableSubsection({
  children,
  childrenRefsArray,
}: ScrollableSubsectionProps) {
  const handleSidescroll = useHandleSidescroll({ childrenRefsArray });

  return (
    <div className='z-10 relative size-full center-elements border-2 border-blue-500'>
      <button
        onClick={() => handleSidescroll(false)}
        type='button'
        className='absolute top-0 bottom-0 my-auto left-0'
      >
        Left
      </button>
      <div
        style={{ scrollbarWidth: 'none' }}
        className='size-full flex items-center justify-start overflow-y-hidden overflow-x-auto border border-red-500'
      >
        {children}
      </div>
      <button
        onClick={() => handleSidescroll(true)}
        type='button'
        className='absolute top-0 bottom-0 my-auto right-0'
      >
        Right
      </button>
    </div>
  );
}
