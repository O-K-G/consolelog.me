'use client';

import type {
  AppContextProps,
  AppContextComponentProps,
} from '@constants/interfaces';
import { createContext, useState, useMemo } from 'react';

export const AppContext = createContext({
  currentTopSection: 'about',
  onChange: () => null,
} as AppContextProps);

export default function AppContextComponent({
  children,
}: AppContextComponentProps) {
  const [currentTopSection, setCurrentTopSection] = useState('about');

  const AppContextData = useMemo(
    () => ({
      currentTopSection,
      onChange: setCurrentTopSection,
    }),
    [currentTopSection]
  );

  return (
    <AppContext.Provider value={AppContextData}>{children}</AppContext.Provider>
  );
}
