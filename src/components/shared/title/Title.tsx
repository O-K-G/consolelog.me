import type { MainTitleProps } from '@constants/interfaces';
import Border from '@components/shared/title/Border';

export default function Title({
  children,
  component: Component = 'h2',
  className = '',
  border,
  variant = 'mainTitle',
  topLabel,
  bottomLabel,
}: MainTitleProps) {
  const selectedVariantClassName = {
    mainTitle:
      'text-transparent font-just-in-the-firestorm purple-text-stroke text-base sm:text-2xl md:text-3xl lg:text-4xl',
    subtitle: 'text-white font-bebas-neue text-2xl sm:text-5xl xl:text-7xl',
  };

  return (
    <div className={`z-10 center-elements flex-col ${className}`}>
      {border && <Border rightLabel={topLabel} />}
      <Component
        className={`z-10 py-2 sm:py-4 px-2 uppercase drop-shadow-purple-glow sm:drop-shadow-purple-glow-sm text-center ${selectedVariantClassName[variant]}`}
      >
        {children}
      </Component>
      {border && <Border leftLabel={bottomLabel} />}
    </div>
  );
}
