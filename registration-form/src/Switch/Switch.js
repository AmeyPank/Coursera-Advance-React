import "./Styles.css";
import { ThemeContext } from "../Context/ThemeContext";

import { useContext } from "react";

const Switch = () => {
const { theme,toggleTheme} = useContext(ThemeContext);
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
      />
      <span onClick={toggleTheme} className="slider round" />
    </label>
  );
};

export default Switch;
