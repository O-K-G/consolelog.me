import type { IconButtonProps } from '@constants/interfaces';

export default function IconButton({
  onClick,
  disabled,
  'aria-label': ariaLabel,
  icon,
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type='button'
      className={`group center-elements disabled:pointer-events-none disabled:select-none ${className}`}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon}
    </button>
  );
}
