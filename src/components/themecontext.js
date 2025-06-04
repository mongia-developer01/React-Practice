import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div style={{ background: dark ? "#222" : "#fff", color: dark ? "#fff" : "#000", minHeight: "100vh", padding: 20 }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
