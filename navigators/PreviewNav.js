import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreviewScreen from "../screens/PreviewScreen";
import AuthentificationNav from "./AuthentificationNav";

const FirstStack = createNativeStackNavigator();

export default function PreviewNav() {
  return (
    <FirstStack.Navigator
      initialRouteName="Preview screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <FirstStack.Screen name="Preview screen" component={PreviewScreen} />
      <FirstStack.Screen name="Auth screen" component={AuthentificationNav} />
    </FirstStack.Navigator>
  );
}
