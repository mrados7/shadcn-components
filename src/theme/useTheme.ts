import { useContext } from "react";
import { ThemeProviderContext } from "./ThemeProvider";

export function useTheme() {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    console.log("Theme not initialized");
    // throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
