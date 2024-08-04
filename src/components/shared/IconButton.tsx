import type { IconButtonProps } from '@constants/interfaces';

export default function IconButton({
  onClick,
  disabled,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  icon,
  className = '',
  ...rest
}: IconButtonProps) {
  return (
    <button
      data-testid={dataTestId}
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
