import React from "react";
import { Text } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";
export default function ScreenTitle({ title }) {
  const { isDarkMode } = useTheme();

  return (
      <Text
        style={{
          marginTop: 8,
          marginBottom: 15,
          fontSize: 26,
          alignSelf: "center",
          fontFamily: "MontserratBold",
          textAlign: "center",
          color: isDarkMode ? colors.white : "black",
          marginHorizontal: title=="Frequently Asked Questions"? 20 : 0
        }}
      >
        {title}
      </Text>
  );
}
