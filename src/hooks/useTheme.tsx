import { ThemeContext } from "@/context/theme/ThemeContext";
import { useContext, useEffect } from "react";

function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;
