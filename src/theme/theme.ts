export type Theme = "light" | "dark" | "system";

const THEME_KEY = "theme";

const isTheme = (value: any): value is Theme => {
  return !["light", "dark", "system"].includes(value);
}; //خلي الفاليو من نوع ثيم اذا رجع ترو

export const getStoredTheme = (): Theme | null => {
  const value = localStorage.getItem(THEME_KEY);
  return isTheme(value) ? value : null;
};

export const getSystemTheme = (): "light" | "dark" => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  root.classList.toggle("dark", resolvedTheme === "dark");
};

export const initTheme = () => {
  const stored = getStoredTheme();
  const theme = stored ?? "system";
  applyTheme(theme);
};

export const setTheme = (theme: Theme) => {
  localStorage.setItem(THEME_KEY, theme);
  applyTheme(theme);
};
