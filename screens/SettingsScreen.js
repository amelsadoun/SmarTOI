import BackScreen from "../components/BackScreen";
import { View, Text, ActivityIndicator, Pressable } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import ThemeSwitch from "../components/ThemeSwitch";
import ScreenTitle from "../components/ScreenTitle";
import { useUserMode } from "../contexts/UserContext";
import { Button, Switch, Icon } from "react-native-paper";
import { colors } from "../assets/colors";
import { useTheme } from "../contexts/ThemeContext";

export default function SettingsScreen({ navigation }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isUserMode } = useUserMode();
  const [fontsLoaded] = useFonts(Fonts);
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <BackScreen>
      <ScreenTitle title="Settings" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 25,
          gap: 10,
        }}
      >
        {isUserMode && (
          <>
            <Button
              icon="account"
              mode="contained"
              style={{ width: "100%" }}
              contentStyle={{ alignSelf: "flex-start", gap: 8 }}
              buttonColor={isDarkMode ? colors.darkerBlue : colors.darkBlue}
              textColor={colors.white}
              onPress={() => navigation.navigate("Edit Profile screen")}
            >
              <Text style={{ fontFamily: "MontserratRegular" }}>
                Edit Profile
              </Text>
            </Button>
            <Button
              icon="lock"
              mode="contained"
              style={{ width: "100%" }}
              contentStyle={{ alignSelf: "flex-start", gap: 8 }}
              buttonColor={isDarkMode ? colors.darkerBlue : colors.darkBlue}
              textColor={colors.white}
              onPress={() => navigation.navigate("Change Password screen")}
            >
              <Text style={{ fontFamily: "MontserratRegular" }}>
                Change password
              </Text>{" "}
            </Button>
          </>
        )}
        <SwitchButton
          title="Dark mode"
          onPress={toggleTheme}
          icon="weather-night"
          isDarkMode={isDarkMode}
        >
          <ThemeSwitch></ThemeSwitch>
        </SwitchButton>
        <SecondButton
          title="Help"
          route="FAQ screen"
          navigation={navigation}
          isDarkMode={isDarkMode}
        />
        {/* <SecondButton
          title="Remove app data"
          route="Signup screen"
          navigation={navigation}
          isDarkMode={isDarkMode}
        /> */}
      </View>
    </BackScreen>
  );
}
/*<ThemeSwitch></ThemeSwitch>*/

function SwitchButton({ title, icon, children, onPress, isDarkMode }) {
  return (
    <Pressable
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
        borderRadius: 20,
        paddingHorizontal: 15,
      }}
      onPress={onPress}
    >
      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Icon source={icon} color={colors.white} size={20}></Icon>
        <Text
          style={{
            color: colors.white,
            fontFamily: "MontserratRegular",
          }}
        >
          {title}
        </Text>
      </View>
      {children}
    </Pressable>
  );
}

function SecondButton({ title, navigation, route, isDarkMode }) {
  return (
    <Pressable
      onPress={() => navigation.navigate(route)}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "MontserratRegular",
        justifyContent: "space-between",
        paddingHorizontal: 23,
        paddingVertical: 10,
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 19,
          fontFamily: "MontserratSemiBold",
          color: isDarkMode ? colors.white : "black",
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 22,
          fontFamily: "MontserratSemiBold",
          color: isDarkMode ? colors.white : "black",
        }}
      >
        {">"}
      </Text>
    </Pressable>
  );
}
