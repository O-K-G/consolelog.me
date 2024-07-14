import { type ReactNode } from 'react';

function NewBorder({
  className,
  variant = 'mainTitle',
}: {
  className?: string;
  variant?: 'mainTitle' | 'subtitle';
}) {
  const selectedVariantClassName = {
    mainTitle:
      'border-[1.5px] border-title-purple drop-shadow-border-purple-glow',
    subtitle: '',
  };

  return (
    <div
      className={`w-full h-2 shrink-0 ${selectedVariantClassName[variant]} ${className}`}
    />
  );
}

export default function NewTitle({
  children,
  component: Component = 'h2',
  className,
  border,
  variant = 'mainTitle',
}: {
  children: ReactNode;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  border?: boolean;
  variant?: 'mainTitle' | 'subtitle';
}) {
  const selectedVariantClassName = {
    mainTitle:
      'uppercase drop-shadow-purple-glow new-purple-text-stroke font-just-in-the-firestorm text-base sm:text-2xl md:text-3xl lg:text-4xl',
    subtitle: '',
  };

  return (
    <div
      className={`z-10 text-center center-elements flex-col text-transparent ${selectedVariantClassName[variant]} ${className}`}
    >
      {border && <NewBorder variant={variant} />}
      <Component className='py-4 px-2'>{children}</Component>
      {border && <NewBorder variant={variant} />}
    </div>
  );
}
