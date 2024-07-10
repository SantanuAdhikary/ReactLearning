/* eslint-disable react-refresh/only-export-components */
import { useState, createContext  } from "react";

export const themeContextApi = createContext();
const { Provider } = themeContextApi;

const theme = {
  light: {
    foreground: "#000",
    background: "#eee",
    color: "#000",
  },
  dark: {
    foreground: "#fff",
    background: "#111",
    color: "#fff",
  },
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <Provider value={{ theme: theme[currentTheme], toggleTheme }}>
      {children}
    </Provider>
  );
};
export default ThemeProvider;
