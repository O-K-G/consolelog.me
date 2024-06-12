'use client';

import { type AppContextComponentProps } from '@constants/interfaces';
import {
  type Dispatch,
  type SetStateAction,
  type MutableRefObject,
  createContext,
  useState,
  useMemo,
  useRef,
} from 'react';

export const AppContext = createContext({
  currentTopSection: 'about',
  onChange: () => null,
  contactSectionRef: { current: null },
} as {
  currentTopSection: string;
  onChange: Dispatch<SetStateAction<string>>;
  contactSectionRef: MutableRefObject<HTMLElement | null>;
});

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
