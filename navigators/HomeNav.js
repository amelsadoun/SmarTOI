import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import BackScreen from "../components/BackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DeviceInfoScreen from "../screens/DeviceInfoScreen";
import DevicesList from "../screens/HomeScreen";
import AddDeviceScreen from "../screens/AddDeviceScreen";
const darkBlue = "#2F4062";
const SecondStack = createNativeStackNavigator();

export default function HomeNav() {

  return (
    <SecondStack.Navigator
      initialRouteName="DevicesList"
      screenOptions={{
        headerShown: false,
      }}
    >
      <SecondStack.Screen
        name="DevicesList"
        component={DevicesList}
        options={{ title: "Devices", headerBackButtonMenuEnabled: true }}
      />
      <SecondStack.Screen
        name="DeviceDetails"
        component={DeviceInfoScreen}
        options={{ title: "Device Details"}}
      />
         <SecondStack.Screen
        name="Add device screen"
        component={AddDeviceScreen}
      />
    </SecondStack.Navigator>
  );
}



