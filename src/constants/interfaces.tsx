import { type ReactNode } from 'react';

export interface AppContextComponentProps {
  children: ReactNode;
}

export interface SectionProps {
  children: ReactNode;
  currentSection: 'about' | 'contact' | 'projects' | 'skills' | 'experience';
  backgroundClassName?: string;
}
