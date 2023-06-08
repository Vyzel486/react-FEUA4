import { createContext, useState } from "react";

const themes = {
  green: {
    foreground: "#fc2803",
    background: "#49fc03",
  },
  blue: {
    foreground: "#cefc03",
    background: "#0324fc",
  },
};

const greenBlue = createContext({
  themeGreenBlue: themes.green,
  toggleGreenMode: () => null,
});

const ThemeProvider = ({ children }) => {
  const [greenMode, setGreenMode] = useState(false);

  const toggleGreenMode = () => {
    setGreenMode((prevGreenMode) => !prevGreenMode);
  };

  return (
    <greenBlue.Provider
      value={{
        themeGreenBlue: greenMode ? themes.green : themes.blue,
        toggleGreenMode,
      }}
    >
      {children}
    </greenBlue.Provider>
  );
};

export { ThemeProvider, greenBlue };
