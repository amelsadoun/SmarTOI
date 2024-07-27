import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PreviewScreen from "../screens/PreviewScreen";
// import AuthentificationNav from "./AuthentificationNav";
import { View } from "react-native";

const FirstStack = createNativeStackNavigator();


const Ab = () => {
  return (
<View style={{width:"100%", height:"100%", backgroundColor:"#d4d"}}></View>  )
}

export default function PreviewNav() {
  return (
    <FirstStack.Navigator
      initialRouteName="Preview screen"
      screenOptions={{
        headerShown: false,
      }}
      >
      {/* <FirstStack.Screen name="Preview screen" component={Ab} /> */}
      <FirstStack.Screen name="Preview screen" component={PreviewScreen} />
      {/* <FirstStack.Screen name="Auth screen" component={AuthentificationNav} /> */}
    </FirstStack.Navigator>
  );
}
