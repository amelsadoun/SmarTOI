import React from "react";
import { Switch } from "react-native-paper";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";

const ThemeSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Switch
      style={{
        padding:0
      }}
      value={isDarkMode}
      onChange={toggleTheme}
    ></Switch>
  );
};

export default ThemeSwitch;
