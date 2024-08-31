"use client"; // Isso garante que o código será executado no cliente

import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-scheme: dark)"; // Corrigi o valor correto da mídia de preferência de cor
  const storageKey = "theme";

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };


  const [mode, setMode] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const userPref = window.localStorage.getItem(storageKey);
      if (userPref) {
        const newMode = userPref;
        setMode(newMode);
        toggleTheme(newMode);
      } else {
        const newMode = window.matchMedia(preferDarkQuery).matches
          ? "dark"
          : "light";
        setMode(newMode);
        toggleTheme(newMode);
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
