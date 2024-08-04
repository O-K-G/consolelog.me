'use client';

import { createContext, useState, useMemo, useRef } from 'react';
import { useScrollByPathname } from '@hooks/useScrollByPathname';
import type {
  AppContextProps,
  AppContextComponentProps,
} from '@constants/interfaces';

export const AppContext = createContext({
  topSectionRefs: { current: [] },
  currentTopSection: 'about',
  onChange: () => null,
} as AppContextProps);

export default function AppContextComponent({
  children,
}: AppContextComponentProps) {
  const [currentTopSection, setCurrentTopSection] = useState('about');
  const topSectionRefs = useRef({});

  const AppContextData = useMemo(
    () => ({
      topSectionRefs,
      currentTopSection,
      onChange: setCurrentTopSection,
    }),
    [currentTopSection]
  );

  useScrollByPathname({ currentTopSection, topSectionRefs });

  return (
    <AppContext.Provider value={AppContextData}>{children}</AppContext.Provider>
  );
}
