import { type ReactNode } from 'react';
import { z } from 'zod';
export const CONTACT_FORM_EMAIL_MAX_LENGTH = 100;
export const CONTACT_FORM_SUBJECT_MIN_LENGTH = 1;
export const CONTACT_FORM_SUBJECT_MAX_LENGTH = 100;
export const CONTACT_FORM_CONTENT_MIN_LENGTH = 1;
export const CONTACT_FORM_CONTENT_MAX_LENGTH = 1000;

export interface AppContextComponentProps {
  children: ReactNode;
}

export interface CurrentSection {
  currentSection: 'about' | 'contact' | 'projects' | 'skills' | 'experience';
}
export interface SectionProps extends CurrentSection {
  children: ReactNode;
  backgroundClassName?: string;
  className?: string;
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

export interface BorderProps {
  leftLabel?: boolean;
  label?: string;
}

export interface BottomInputComponentButtonsProps {
  onClick?: (val: 'ltr' | 'rtl') => void;
}

export interface InputComponentProps extends BottomInputComponentButtonsProps {
  component?: 'input' | 'textarea';
  id: string;
  placeholder: string;
  minLength?: number;
  maxLength: number;
  rows?: number;
  isSubmit?: boolean;
  value: string;
  onChange: (val: string) => void;
  isError?: boolean;
}

export interface IconsProps {
  className: string;
}

export const FormDataSchema = z.object({
  email: z.string().email().max(CONTACT_FORM_EMAIL_MAX_LENGTH),
  subject: z
    .string()
    .max(CONTACT_FORM_SUBJECT_MAX_LENGTH)
    .min(CONTACT_FORM_SUBJECT_MIN_LENGTH),
  content: z
    .string()
    .max(CONTACT_FORM_CONTENT_MAX_LENGTH)
    .min(CONTACT_FORM_CONTENT_MIN_LENGTH),
});

export type FormValidationProps = z.infer<typeof FormDataSchema>;
