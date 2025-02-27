import { IconButtonProps } from "@constants/interfaces";

export default function IconButton({
  onClick,
  disabled,
  "aria-label": ariaLabel,
  "data-testid": dataTestId,
  "data-pointer-events": dataPointerEvents,
  icon,
  className = "",
  ...rest
}: IconButtonProps) {
  return (
    <button
      data-testid={dataTestId}
      data-pointer-events={dataPointerEvents}
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`group center-elements outline-hidden lg:cursor-pointer disabled:pointer-events-none disabled:select-none ${className}`}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon}
    </button>
  );
}
