import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="p-2 transition duration-500 ease-in-out rounded-full">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-3xl cursor-pointer text-slate-50 dark:text-slate-900"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-3xl cursor-pointer text-slate-50 dark:text-slate-900"
        />
      )}
    </div>
  );
};

export default Toggle;
