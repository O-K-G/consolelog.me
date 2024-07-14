import { type ReactNode } from 'react';

function NewBorder({
  className,
  variant = 'mainTitle',
  leftLabel,
  rightLabel,
}: {
  className?: string;
  variant?: 'mainTitle' | 'subtitle';
  leftLabel?: string;
  rightLabel?: string;
}) {
  const selectedVariantBorderClassName = {
    mainTitle:
      'border-[1.5px] border-title-purple drop-shadow-border-purple-glow',
    subtitle: '',
  };

  const selectedVariantLabelClassName = {
    mainTitle: 'text-sm sm:text-base md:text-lg lg:text-2xl text-title-purple',
    subtitle: '',
  };

  return (
    <div
      className={`z-10 uppercase h-3 sm:h-3.5 md:h-4 lg:h-5 leading-none center-elements whitespace-nowrap font-star-date-81316 gap-3 w-full ${
        selectedVariantLabelClassName[variant]
      } ${leftLabel ? 'flex-row-reverse' : ''}`}
    >
      <div
        className={`h-[72%] mb-[0.05rem] sm:h-[71.5%] sm:mb-[0.1rem] lg:h-3/4 lg:mb-0.5 w-full ${selectedVariantBorderClassName[variant]} ${className}`}
      />
      {rightLabel ?? leftLabel}
    </div>
  );
}

export default function NewTitle({
  children,
  component: Component = 'h2',
  className,
  border,
  variant = 'mainTitle',
  topLabel,
  bottomLabel,
}: {
  children: ReactNode;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  border?: boolean;
  variant?: 'mainTitle' | 'subtitle';
  topLabel?: string;
  bottomLabel?: string;
}) {
  const selectedVariantClassName = {
    mainTitle:
      'uppercase drop-shadow-purple-glow new-purple-text-stroke font-just-in-the-firestorm text-base sm:text-2xl md:text-3xl lg:text-4xl',
    subtitle: '',
  };

  return (
    <div className={`z-10 text-center center-elements flex-col ${className}`}>
      {border && <NewBorder rightLabel={topLabel} variant={variant} />}
      <Component
        className={`py-2 sm:py-4 px-2 text-transparent ${selectedVariantClassName[variant]}`}
      >
        {children}
      </Component>
      {border && <NewBorder leftLabel={bottomLabel} variant={variant} />}
    </div>
  );
}
