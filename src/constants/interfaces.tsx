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
  leftLabel?: string;
  rightLabel?: string;
}

export interface TitleProps extends TitleLabels {
  label: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface TitleBorderProps extends TitleLabels {
  className: string;
}
