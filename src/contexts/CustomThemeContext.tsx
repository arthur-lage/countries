import React, { createContext, useState } from "react";

type ThemeContextProps = {
  theme: string;
  handleSetTheme: (newTheme: string) => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

type Props = {
  children: React.ReactNode;
};

export function CustomThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState("light");

  function handleSetTheme(newTheme: string) {
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
