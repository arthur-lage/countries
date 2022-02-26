import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { GlobalStyles } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
