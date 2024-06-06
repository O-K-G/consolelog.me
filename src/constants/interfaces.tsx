import { type ReactNode } from 'react';

export interface AppContextComponentProps {
  children: ReactNode;
}

export interface SectionProps {
  children: ReactNode;
  currentSection: 'about' | 'contact' | 'projects' | 'skills' | 'experience';
  backgroundClassName?: string;
}

interface TitleLabels {
  topLabel?: string;
  bottomLabel?: string;
}

export interface TitleProps extends TitleLabels {
  id?: number;
  open?: boolean;
  onClick?: () => void;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  isButton?: boolean;
  label: string;
  /** Must be in the following format: ' ... before:content-['some_string'] ',
   * as JIT mode can't handle template literals.
   */
  labelGlowText: string;
  alternativeLabel?: string;
  className?: string;
  border?: boolean;
}

export interface OldschoolButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}

export interface NoDialogProps {
  open: boolean;
  onClick: () => void;
}

export interface OldProps {
  onClick: () => void;
}

export interface SVG90DegreesProps {
  className: string;
  pathClassName: string;
}

export interface AboutTargetIconProps {
  open: boolean;
  bottom?: boolean;
}

export interface AttributionDialogProps {
  open: boolean;
  onClick: () => void;
}

export interface AlternatingButtonsProps {
  sharedClassName?: string;
  open?: boolean;
  onClick?: () => void;
  label?: string;
  alternativeLabel?: string;
}
