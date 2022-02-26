import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
  },
};

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme };
