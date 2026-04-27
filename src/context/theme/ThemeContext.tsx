import { createContext, useState } from "react";
import { ContextThemeType, ThemeProviderProps, ThemeType } from "./theme.types";

export const ThemeContext = createContext<ContextThemeType>(
  {} as ContextThemeType,
);
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
