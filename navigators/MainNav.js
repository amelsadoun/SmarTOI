import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CommonHeader from "../components/CommonHeader";
import MyTabBar from "../components/MyTabBar";
import HomeNav from "./HomeNav";
import SettingsNav from "./SettingsNav";
import { Keyboard, Platform } from "react-native";
const darkBlue = "#2F4062";

const Tab = createBottomTabNavigator();

export default function MainNav() {
    const [keyboardShow, setKeyboardShow] = React.useState();
    React.useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardShow(true);
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardShow(false);
        }
      );
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: Platform.OS!== 'ios',
        header: () => <CommonHeader />,
      }}
      tabBar={(props) => keyboardShow?(<></>): <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeNav} options={{ title: "Home" }} />
      <Tab.Screen name="Settings" component={SettingsNav} />
    </Tab.Navigator>
  );
}
