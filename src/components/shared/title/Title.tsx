import { MainTitleProps } from "@constants/interfaces";
import Border from "@components/shared/title/Border";

export default function Title({
  children,
  component: Component = "h2",
  className = "",
  border,
  variant = "mainTitle",
  topLabel,
  bottomLabel,
  animationClassName = "title-typing-animation",
  subtitleFontClassName = "info-text-font-classNames",
  isRightLabelBlink,
}: MainTitleProps) {
  const selectedVariantClassName = {
    mainTitle: "text-transparent main-title-font-classNames purple-text-stroke",
    subtitle: `text-white text-2xl sm:text-5xl xl:text-7xl ${subtitleFontClassName}`,
  };

  return (
    <div className={`center-elements flex-col ${className}`}>
      {border && (
        <Border isTextBlink={isRightLabelBlink} rightLabel={topLabel} />
      )}
      <Component
        className={`py-2 sm:py-4 px-2 uppercase drop-shadow-purple-glow sm:drop-shadow-purple-glow-sm text-center ${animationClassName} ${selectedVariantClassName[variant]}`}
      >
        {children}
      </Component>
      {border && <Border leftLabel={bottomLabel} />}
    </div>
  );
}
