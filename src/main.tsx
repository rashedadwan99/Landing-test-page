import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initTheme } from "./theme/theme.ts";
import "./index.css";
import { ThemeProvider } from "./context/theme/ThemeContext.tsx";
initTheme();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
