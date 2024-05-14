import { View, Pressable } from "react-native";
import { Svg } from "react-native-svg";
import React from "react";
import Devices from "../icons/Devices";
import Home from "../icons/Home";
import Settings from "../icons/Settings";
import NotificationsIcon from "../icons/Notifications";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";
function MyTabBar({ state, descriptors, navigation, route }) {
  const { isDarkMode } = useTheme();
  const currentRoute = state.routes[state.index];

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? colors.darkBlue : colors.white,
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        height: "12%",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 14,
          borderTopLeftRadius:
            currentRoute.name == "Home" && currentRoute.state?.index == 1
              ? 0
              : 20,
          borderTopRightRadius:
            currentRoute.name == "Home" && currentRoute.state?.index == 1
              ? 0
              : 20,
          overflow: "hidden",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Pressable
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                aspectRatio: 1,
                paddingRight: label == "Notifications" ? 8 : 10,
                paddingBottom: label == "Notifications" ? 6 : 10,
              }}
            >
              <View
                style={{
                  backgroundColor: isFocused
                    ? isDarkMode
                      ? colors.darkBlue
                      : colors.darkerBlue
                    : "transparent",
                  borderRadius: 100,
                  padding: 20,
                }}
              >
                <Svg
                  width={27}
                  height={28}
                  viewBox="0 0 27 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <Icon
                    name={label}
                    color={isFocused ? colors.yellow : "white"}
                  ></Icon>
                </Svg>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function Icon({ name, color }) {
  switch (name) {
    case "Settings":
      return <Settings color={color}></Settings>;
    case "Home":
      return <Home color={color}></Home>;
    case "Devices":
      return <Devices color={color}></Devices>;
    case "Notifications":
      return <NotificationsIcon color={color}></NotificationsIcon>;
  }
}

export default MyTabBar;
