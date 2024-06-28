import type { IconButtonProps } from '@constants/interfaces';

export default function IconButton({
  onClick,
  disabled,
  'aria-label': ariaLabel,
  'data-testid': dataTestid,
  icon,
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      data-testid={dataTestid}
      onClick={onClick}
      disabled={disabled}
      type='button'
      className={`group center-elements outline-none disabled:pointer-events-none disabled:select-none ${className}`}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon}
    </button>
  );
}
