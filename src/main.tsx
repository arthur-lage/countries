import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { GlobalStyles } from "./styles/global";

import { BrowserRouter } from "react-router-dom";

import { CustomThemeProvider } from "./contexts/CustomThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <GlobalStyles />
        <App />
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
