import { Pressable, Text, View, ImageBackground } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import LogoBig from "../icons/LogoBig";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import { Animated } from "react-native";
import { colors } from "../assets/colors";

export default function StartScreen({ navigation }) {
  const buttons = [{ label: "Start now!", routeName: "Main screen" }];

  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: white,
      }}
    >
      <ImageBackground
        source={require("../assets/HouseBgHigherOpacity.png")}
        resizeMode="cover"
        style={{
          backgroundColor: white,
          marginTop: 50,
          flex: 1,
          resizeMode: "cover",
          height: "auto",
          display: "flex",
          gap: 20,
          width: "100%",
          alignSelf: "center",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          paddingTop: 80,
        }}
        imageStyle={{
          opacity: 0.2,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            fontFamily: "MontserratBold",
            marginTop: 50,
          }}
        >
          Welcome to
        </Text>
        <LogoBig></LogoBig>
        <Text
          style={{
            fontSize: 25,
            fontFamily: "MontserratRegular",
            fontWeight: "200",
            textAlign: "center",
            marginHorizontal: "13%",
          }}
        >
          One app for all smart home elements.
        </Text>
      </ImageBackground>
      <Animated.View
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: darkBlue,
          height: "27%",
          width: "105%",
          borderTopLeftRadius: 75,
          borderTopRightRadius: 75,
          paddingTop: 32,
          paddingBottom: "5%",
          gap: 25,
        }}
      >
        {buttons.map((item) => (
          <NavButton
            key={item.label}
            item={item}
            navigation={navigation}
          ></NavButton>
        ))}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratLight",
              color: colors.white,
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Unlock the smart potential of your home.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}

function NavButton({ navigation, item }) {
  return (
    <Pressable
      style={{
        borderColor: "white",
        borderWidth: 1.5,
        borderStyle: "solid",
        width: "66%",
        height: 70,
        textAlign: "center",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Roboto",
        fontSize: "medium",
        borderRadius: 20,
      }}
      onPress={() => {
        navigation.navigate(item.routeName);
      }}
    >
      <Text
        style={{
          fontFamily: "MontserratBold",
          fontSize: 22,
          color: colors.white,
        }}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}
