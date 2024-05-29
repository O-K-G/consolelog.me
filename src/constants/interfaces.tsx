import { type ReactNode } from 'react';

export interface AppContextComponentProps {
  children: ReactNode;
}

export interface SectionProps {
  children: ReactNode;
  currentSection: 'about' | 'contact' | 'projects' | 'skills' | 'experience';
  backgroundClassName?: string;
}

export interface TitleProps {
  label: string;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
