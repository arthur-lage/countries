import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./contexts/CustomThemeContext";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
