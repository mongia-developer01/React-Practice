import { useTheme } from "./themecontext";

const ThemeToggle = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {dark ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeToggle;
