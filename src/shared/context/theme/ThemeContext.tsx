import { ETheme } from "@shared/constants/theme";
import { createContext, useState, type FC, type PropsWithChildren } from "react";

interface IThemeContext {
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(ETheme.Light);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
