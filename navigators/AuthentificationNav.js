import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./MainNav";
import StartScreen from "../screens/StartScreen";

const FirstStack = createNativeStackNavigator();

export default function AuthentificationNav() {
  return (
    <FirstStack.Navigator
      initialRouteName="Start screen"
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <FirstStack.Screen name="Start screen" component={StartScreen} />
      <FirstStack.Screen name="Main screen" component={MainScreen} />
    </FirstStack.Navigator>
  );
}
