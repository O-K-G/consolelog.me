import type { SubtitleProps } from '@constants/interfaces';
import Title from '@components/shared/title/Title';

export default function Subtitle({
  label,
  labelGlowText,
  className,
}: SubtitleProps) {
  return (
    <Title
      className={className}
      label={label}
      labelGlowText={labelGlowText}
      beforeBlurClassName='lg:before:blur-[2rem]'
      fontClassName='font-bebas-neue'
      textSizeClassName='text-2xl sm:text-3xl lg:text-5xl xl:text-7xl'
      textColorClassName='text-white'
      textStrokeClassName='lg:title-text-stroke-purple'
      beforeTextStrokeClassName='before:lg:title-text-stroke-purple-narrow-dark'
    />
  );
}
