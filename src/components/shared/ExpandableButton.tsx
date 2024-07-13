import { useState } from 'react';
import AboutTargetIcon from '@components/shared/title/AboutTargetIcon';

export default function ExpandableButton({
  label,
  alternativeLabel,
}: {
  label: string;
  alternativeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className='z-10 container-type-size p-6 size-full relative max-h-[80%] center-elements'>
      <div
        data-open={open}
        className='transition-1000 group relative max-h-full center-elements w-1/2 h-[50cqw] lg:w-1/4 lg:h-[25cqw] data-[open=true]:expandable-button-size-container'
      >
        <AboutTargetIcon open={open} />
        <button
          data-open={open}
          className='transition-1000 outline-none overflow-hidden size-full data-[open=false]:closed-expandable-button data-[open=true]:opened-expandable-button'
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
