import { ThemeContext } from "@shared/context/theme";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }

  return context;
};
