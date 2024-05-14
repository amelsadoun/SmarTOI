import React from "react";
import { useState } from "react";
import { PaperProvider, TextInput } from "react-native-paper";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import Logo from "../icons/Logo";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";
import Fonts from "./Fonts";

export default function AuthentificationInput({
  label,
  icon,
  onChange,
  value,
  hiddenText
}) {
  const [fontsLoaded] = useFonts(Fonts);

  return (
    <PaperProvider>
      <TextInput
        mode="outlined"
        style={{
          backgroundColor: darkBlue,
          paddingHorizontal: 10,
          width: 290,
        }}
        textColor={white}
        activeOutlineColor={yellow}
        outlineColor={white}
        placeholder={label}
        //  label={label}
        placeholderTextColor={white}
        outlineStyle={{
          borderRadius: 15,
          borderWidth: 1.5,
          borderStyle: "solid",
        }}
        value={value}
        secureTextEntry={(hiddenText==undefined || hiddenText==false)?false:true}
        onChangeText={onChange}
        right={<TextInput.Icon icon={icon} color={white} />}
      />
    </PaperProvider>
  );
}
