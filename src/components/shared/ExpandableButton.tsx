import { useState } from 'react';
import AboutTargetIcon from '@components/shared/title/AboutTargetIcon';

const OPEN_SIZE_CLASSNAME =
  'data-[open=true]:w-full data-[open=true]:h-[100cqw] data-[open=true]:md:w-[100cqh] data-[open=true]:md:h-full data-[open=true]:border data-[open=true]:md:border-green-500';

export default function ExpandableButton({
  label,
  alternativeLabel,
}: {
  label: string;
  alternativeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className='z-10 container-type-size p-6 size-full relative max-h-[80%] center-elements border border-blue-500'>
      <div
        data-open={open}
        className={`transition-1000 group relative max-h-full center-elements w-1/2 h-[50cqw] lg:w-1/4 lg:h-[25cqw] ${OPEN_SIZE_CLASSNAME}`}
      >
        <AboutTargetIcon open={open} />
        <button
          className={`outline-none ${
            !open
              ? 'text-sm sm:text-2xl md:text-4xl text-transparent title-text-stroke-white font-just-in-the-firestorm uppercase drop-shadow-[0px_0px_3px_rgba(175,25,255,1)]'
              : ''
          }`}
          type='button'
          onClick={() => setOpen((prevValue) => !prevValue)}
        >
          {!open ? label : alternativeLabel}
        </button>
        <AboutTargetIcon bottom open={open} />
      </div>
    </div>
  );
}
