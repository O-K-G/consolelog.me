'use client';

import { type AppContextComponentProps } from '@constants/interfaces';
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useState,
  useMemo,
} from 'react';

export const AppContext = createContext({
  currentTopSection: 'about',
  onChange: () => null,
} as {
  currentTopSection: string;
  onChange: Dispatch<SetStateAction<string>>;
});

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
