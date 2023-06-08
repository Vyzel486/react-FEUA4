import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { greenBlue } from "../contexts/GreenBlueThemes";

const Card = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext);
  const { themeGreenBlue, toggleGreenMode } = useContext(greenBlue);

  return (
    <div>
      <div
        style={{
          width: 300,
          height: 100,
          background: theme.background,
          color: theme.foreground,
        }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, alias.
        </p>
        <button
          style={{ background: theme.background, color: theme.foreground }}
          onClick={toggleDarkMode}
        >
          Change theme
        </button>
      </div>
      <div
        style={{
          width: 300,
          height: 100,
          background: themeGreenBlue.background,
          color: themeGreenBlue.foreground,
        }}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, alias.
        </p>
        <button
          style={{ background: themeGreenBlue.background, color: themeGreenBlue.foreground }}
          onClick={toggleGreenMode}
        >
          Change theme
        </button>
      </div>
    </div>
  );
};

export default Card;
