'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import {
  BoltProps,
  CogwheelProps,
  LoaderProps,
  LoaderTextProps,
} from '@constants/interfaces';

export const LOADER_TEST_ID = 'loader-test';

function Cogwheel({
  sizeClassName = 'size-24',
  children,
  childrenClassName = 'center-elements',
  bgClassName = 'bg-blue-300',
  className = '',
  'data-testid': dataTestId,
}: CogwheelProps) {
  const cogwheelClassName =
    'absolute top-0 bottom-0 left-0 right-0 m-auto size-full rounded-md';

  return (
    <div
      data-testid={dataTestId}
      className={`relative animate-spin ${sizeClassName} ${className}`}
    >
      <div className={`${cogwheelClassName} ${bgClassName}`} />
      <div className={`${cogwheelClassName} ${bgClassName} rotate-45`}>
        <div
          className={`size-full bg-black rounded-full center-elements ${childrenClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Bolt({ centerPointClassName = '' }: BoltProps) {
  return (
    <div className="rounded-full bg-blue-200 size-1/3 center-elements">
      <div className="bg-black rounded-full size-3/4 center-elements p-1">
        <div
          className={`bg-white rounded-full size-full ${centerPointClassName}`}
        />
      </div>
    </div>
  );
}

function LoaderText({ label, slot }: LoaderTextProps) {
  if (label ?? slot) {
    return (
      <div className="flex justify-center items-start flex-col w-full sm:w-auto px-4 sm:px-0">
        <div className="font-mono w-full text-center text-base sm:text-xl animate-flash-loader-text text-sky-500">
          {label}
        </div>
        {slot}
      </div>
    );
  }
}

function CogwheelsSeparator({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start justify-center">{children}</div>
  );
}

export default function Loader({
  open,
  label,
  loaderTextAdditionalSlot,
}: LoaderProps) {
  const [isLoderVisible, setIsLoderVisible] = useState(true);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const onLoad = () => {
      if (isLoderVisible) {
        setIsLoderVisible(false);
      }
    };

    if (isLoader) {
      if (document.readyState === 'complete') {
        onLoad();
      } else {
        window.addEventListener('load', onLoad);
      }

      return () => {
        window.removeEventListener('load', onLoad);
      };
    }
  }, [isLoader, isLoderVisible]);

  if (!isLoader && !open) {
    return null;
  }

  return (
    <div
      onTransitionEnd={() => setIsLoader(false)}
      data-open={!!(isLoderVisible || open)}
      className="data-[open=false]:opacity-0 data-[open=true]:opacity-100 transition-1000 fixed text-white text-lg center-elements flex-col gap-10 z-50 top-0 left-0 size-full bg-[#111111]"
    >
      <Cogwheel
        data-testid={LOADER_TEST_ID}
        childrenClassName="flex items-start justify-center"
      >
        <CogwheelsSeparator>
          {[
            {
              bgClassName: 'bg-emerald-100',
              sizeClassName: 'size-12',
            },
            {
              bgClassName: 'bg-red-200',
              sizeClassName: 'size-10',
            },
          ].map((props: CogwheelProps) => (
            <Cogwheel key={`cog-1-${props.bgClassName}`} {...props}>
              <Bolt />
            </Cogwheel>
          ))}
        </CogwheelsSeparator>
        <CogwheelsSeparator>
          {[
            {
              bgClassName: 'bg-pink-200',
              sizeClassName: 'size-16',
              bolt: <Bolt centerPointClassName="mt-1" />,
            },
            {
              className: '-mt-3',
              bgClassName: 'bg-zinc-400',
              sizeClassName: 'size-8',
              bolt: <Bolt />,
            },
          ].map(({ bolt, ...props }) => (
            <Cogwheel key={`cog-2-${props.bgClassName}`} {...props}>
              {bolt}
            </Cogwheel>
          ))}
        </CogwheelsSeparator>
      </Cogwheel>
      <LoaderText label={label} slot={loaderTextAdditionalSlot} />
    </div>
  );
}
