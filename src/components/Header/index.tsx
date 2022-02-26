import React, { useContext } from "react";
import { Container } from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/CustomThemeContext";

export function Header() {
  const { theme, handleSetTheme } = useContext(ThemeContext)

  function handleTheme() {
    if (theme === "light") {
      handleSetTheme("dark");
    } else {
      handleSetTheme("light");
    }
  }

  return (
    <Container>
      <h1 className={`title`}>
        <Link to="/">Countries</Link>
      </h1>

      <div
        onClick={handleTheme}
        className={`themeWrapper`}
      >
        <div className={`themeToggler ${theme === "dark" ? "dark" : ""}`}>
          {theme === "dark" ? (
            <FaMoon color="#fff" size={24} />
          ) : (
            <FaSun color="#222" size={24} />
          )}
        </div>
      </div>
    </Container>
  );
}
