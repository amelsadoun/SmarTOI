import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
const white="#FEFEFF";
const darkBlue = "#2F4062";

function BackScreen({ children }) {
  const { isDarkMode } = useTheme();
  
  return (
    <ImageBackground
      source={isDarkMode?require("../assets/backgroundDarkTheme.png"):require("../assets/Group.png")}
      resizeMode="cover"
      style={{
        backgroundColor: isDarkMode?darkBlue:white,
        height: "120%",
        flex: 1,
        resizeMode: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        {children}
      </View>
    </ImageBackground>
  );
}

export default BackScreen;
