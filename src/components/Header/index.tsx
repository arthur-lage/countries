import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  function handleTheme() {
    setIsThemeDark((prev) => !prev);
  }

  return (
    <Container>
      <h1 className={`title`}>
        <Link to="/">Countries</Link>
      </h1>

      <div onClick={handleTheme} className={`themeWrapper`}>
        <div className={`themeToggler`}>
          {isThemeDark ? (
            <FaMoon color="#fff" size={24} />
          ) : (
            <FaSun color="#222" size={24} />
          )}
        </div>
      </div>
    </Container>
  );
}
