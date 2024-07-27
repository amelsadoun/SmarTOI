import React from "react";
import { useFonts } from "expo-font";
import Fonts from "./Fonts";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";
import { TextInput } from "react-native";

export default function AuthentificationInput({
  label,
  icon,
  onChange,
  value,
  hiddenText,
}) {
  const [fontsLoaded] = useFonts(Fonts);
  const { isDarkMode } = useTheme();
  return (
    <TextInput
      //   mode="outlined"
      style={{
        backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
        paddingHorizontal: 10,
        width: 300,
        height: 60,
        justifyContent: "center",
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 12,
        color: colors.white,
        fontSize: 15,
        paddingHorizontal: 15,
        fontFamily: "MontserratLight"
      }}
      //   contentStyle={{
      //     color: colors.white,
      //   }}
      placeholder={label}
      //   label={label}
      placeholderTextColor={colors.white}
      //   outlineStyle={{
      //     borderRadius: 15,
      //     borderWidth: 1.5,
      //     borderStyle: "solid",
      //   }}
      value={value}
      //   secureTextEntry={
      //     hiddenText == undefined || hiddenText == false ? false : true
      //   }
      onChangeText={onChange}
    />
  );
}
