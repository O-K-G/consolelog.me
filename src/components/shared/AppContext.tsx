'use client';

import { createContext, useState, useMemo, useRef } from 'react';
import { useScrollByPathname } from '@hooks/useScrollByPathname';
import { usePathname } from 'next/navigation';
import { DIRECTION_BY_LANGUAGE } from '@/constants/LocaleDirection';
import type {
  AppContextProps,
  AppContextComponentProps,
} from '@constants/interfaces';

export const AppContext = createContext({
  topSectionRefs: { current: [] },
  currentTopSection: 'about',
  onChange: () => null,
  dir: 'ltr',
} as AppContextProps);

export default function AppContextComponent({
  children,
}: AppContextComponentProps) {
  const [currentTopSection, setCurrentTopSection] = useState('about');
  const topSectionRefs = useRef({});
  const pathname = usePathname();
  const dir =
    (DIRECTION_BY_LANGUAGE[
      pathname?.substring(1) as keyof typeof DIRECTION_BY_LANGUAGE
    ] as 'ltr' | 'rtl') || 'ltr';

  const AppContextData = useMemo(
    () => ({
      topSectionRefs,
      currentTopSection,
      onChange: setCurrentTopSection,
      dir,
    }),
    [currentTopSection, dir]
  );

  useScrollByPathname({ currentTopSection, topSectionRefs });

  return (
    <AppContext.Provider value={AppContextData}>{children}</AppContext.Provider>
  );
}
