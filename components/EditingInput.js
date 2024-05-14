import React from "react";
import { PaperProvider, TextInput } from "react-native-paper";
import { useFonts } from "expo-font";
import Fonts from "./Fonts";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";

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
    <PaperProvider>
      <TextInput
        mode="outlined"
        style={{
          backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
          paddingHorizontal: 10,
          width: 300,
          height: 63,
          justifyContent: "center",
          color: colors.white
        }}
        contentStyle={{
          color: colors.white,
        }}
        textColor={colors.white}
        activeOutlineColor={colors.yellow}
        outlineColor={colors.white}
       // placeholder={label}
        label={label}
        placeholderTextColor={colors.white}
        outlineStyle={{
          borderRadius: 15,
          borderWidth: 1.5,
          borderStyle: "solid",
        }}
        value={value}
        secureTextEntry={
          hiddenText == undefined || hiddenText == false ? false : true
        }
        onChangeText={onChange}
        right={<TextInput.Icon icon={icon} color={colors.white} />}
      />
    </PaperProvider>
  );
}
