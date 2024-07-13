import { useState } from 'react';
import AboutTargetIcon from '@components/shared/title/AboutTargetIcon';

const OPEN_SIZE_CLASSNAME =
  'data-[open=true]:w-full data-[open=true]:h-[100cqw] data-[open=true]:md:w-2/3 data-[open=true]:md:h-[66.666667cqw] data-[open=true]:lg:w-1/2 data-[open=true]:lg:h-[50cqw] data-[open=true]:border data-[open=true]:border-green-500';

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
        className={`transition-1000 relative max-h-full center-elements w-1/2 h-[50cqw] lg:w-1/4 lg:h-[25cqw] border border-red-500  ${OPEN_SIZE_CLASSNAME}`}
      >
        <AboutTargetIcon open={open} />
        <button
          className='size-full'
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
