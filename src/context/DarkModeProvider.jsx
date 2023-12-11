import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

const getTheme = () => {
  const dashtheme = localStorage.getItem("theme");
  if (!dashtheme) {
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return dashtheme;
  }
};

const DarkModeProvider = ({ children }) => {
  const [dashtheme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    if (dashtheme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", dashtheme);
    };

    refreshTheme();
  }, [dashtheme]);

  return (
    <DarkModeContext.Provider
      value={{
        dashtheme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
