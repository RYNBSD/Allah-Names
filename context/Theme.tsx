import type { ReactNode } from "react";
import { createContext, useContext } from "react";

type ThemeType = object;

const ThemeContext = createContext<ThemeType | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={null}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
