import React, { useState, useEffect, createContext, useMemo } from "react";
import PropTypes from "prop-types";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "light";
    }
  }
  return "dark"; // night theme as the default;
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (rawTheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const memoTheme = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={memoTheme}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  initialTheme: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  initialTheme: "light",
};
