import type { MutableRefObject, ReactNode } from 'react';
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
  defaultHeight?: string;
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
  dir: 'ltr' | 'rtl';
  onClick: (val: 'ltr' | 'rtl') => void;
  isSubmitDisabled: boolean;
  leftSlot: ReactNode;
  onSubmit: () => void;
}

export interface InputComponentProps {
  component?: 'input' | 'textarea';
  id: string;
  placeholder: string;
  minLength?: number;
  maxLength: number;
  rows?: number;
  onChange: () => void;
  onClick?: () => void;
  isError?: boolean;
  bottomSlot?: ReactNode;
  isReset?: boolean;
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

export type Fields = 'email' | 'subject' | 'content';

export type FormErrorNames = Fields[];

export interface DialogBackdropProps {
  open: boolean;
  onClose: () => void;
  errorDetails: string;
}

export interface ErrorDialogProps {
  isFade: null | boolean;
  onClick: () => void;
  errorDetails: string;
}

export interface MailHTMLTemplateProps {
  dir: string;
  email: string;
  subject: string;
  content: string;
}

export const BASE_STATUS_CODES = {
  400: false,
  201: true,
  401: false,
} as const;

export interface UseHandleObserveAndScrollByPathNameProps
  extends CurrentSection {
  sectionRef: MutableRefObject<null>;
}

export interface AnchorLinkProps {
  url: string;
  icon: ReactNode;
  isRounded?: boolean;
  ariaLabel: string;
}
