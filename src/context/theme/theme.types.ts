export type ThemeProviderProps = {
  children: React.ReactNode;
};
export type ThemeType = "dark" | "light";
export type SwitchThemeType = React.Dispatch<React.SetStateAction<ThemeType>>;
export type ContextThemeType = {
  theme: ThemeType;
  setTheme: SwitchThemeType;
};
