import { type Dispatch, type SetStateAction, createContext } from 'react';

export const AppContext = createContext({
  onChange: () => null,
} as {
  onChange: Dispatch<SetStateAction<string>>;
});
