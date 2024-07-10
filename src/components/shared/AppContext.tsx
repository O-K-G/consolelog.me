'use client';

import type {
  AppContextProps,
  AppContextComponentProps,
} from '@constants/interfaces';
import { createContext, useState, useMemo, useRef } from 'react';

export const AppContext = createContext({
  currentTopSection: 'about',
  onChange: () => null,
  contactSectionRef: { current: null },
} as AppContextProps);

export default function AppContextComponent({
  children,
}: AppContextComponentProps) {
  const [currentTopSection, setCurrentTopSection] = useState('about');
  const contactSectionRef = useRef(null);

  const AppContextData = useMemo(
    () => ({
      currentTopSection,
      onChange: setCurrentTopSection,
      contactSectionRef,
    }),
    [currentTopSection]
  );

  return (
    <AppContext.Provider value={AppContextData}>{children}</AppContext.Provider>
  );
}
