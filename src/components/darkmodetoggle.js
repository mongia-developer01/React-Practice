import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    height: "100vh"
  };

  return (
    <div style={themeStyle}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <p>Welcome to {darkMode ? "Dark" : "Light"} Mode</p>
    </div>
  );
}

export default DarkModeToggle;