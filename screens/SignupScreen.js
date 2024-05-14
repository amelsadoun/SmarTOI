import React from "react";
import { useState } from "react";
import AuthentificationInput from "../components/AuthentificationInput";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import { useFonts } from "expo-font";
import Logo from "../icons/Logo";
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";
import Fonts from "../components/Fonts";

function SignupScreen({ navigation }) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  console.log(email);
  const [fontsLoaded] = useFonts(Fonts);


  return (
    <View
      style={{
        alignItems: "center",
        alignContent: "center",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: white,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 40,
          right: 20,
        }}
      >
        <Logo></Logo>
      </View>
      <ImageBackground
        source={require("../assets/SignupBg.png")}
        resizeMode="cover"
        style={{
          backgroundColor: white,
          marginTop: "10%",
          zIndex: -1,
          height: 300,
          paddingTop: 50,
          width: "100%",
          alignSelf: "center",
          flex: 1,
          resizeMode: "cover",
          display: "flex",
          gap: 30,
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      ></ImageBackground>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          gap: 10,
        }}
        style={{
          alignSelf: "center",
          flexDirection: "column",
          alignContent: "center",
          backgroundColor: darkBlue,
          height: "49%",
          width: "105%",
          borderTopLeftRadius: 90,
          borderTopRightRadius: 90,
          paddingTop: 25,
          paddingBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            marginHorizontal: 60,
            color: white,
            fontFamily: "MontserratRegular",
            marginVertical: 10,
            opacity: 0.75,
          }}
        >
          Create and account and backup all your devices
        </Text>
        <AuthentificationInput
          label="Email"
          icon="email"
          value={email}
          onChange={(email) => setEmail(email)}
        ></AuthentificationInput>
        <AuthentificationInput
          label="Phone number"
          icon="phone"
          value={phoneNumber}
          onChange={(phoneNumber) => setPhoneNumber(phoneNumber)}
        ></AuthentificationInput>
        <AuthentificationInput
          label="Password"
          icon="lock"
          hiddenText={true}
          value={password}
          onChange={(password) => setPassword(password)}
        ></AuthentificationInput>
        <AuthentificationInput
          label="Confirm password"
          icon="lock"
          value={passwordConfirmation}
          hiddenText={true}
          onChange={(passwordConfirmation) =>
            setPasswordConfirmation(passwordConfirmation)
          }
        ></AuthentificationInput>
        <Pressable
          style={{
            backgroundColor: white,
            color: "black",
            width: 280,
            height: 50,
            textAlign: "center",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 16,
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "MontserratSemiBold"
            }}
          >
            Sign up
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Login screen")}>
          <Text
            style={{
              color: yellow,
              textDecorationLine: "underline",
              fontFamily: "MontserratLight"
            }}
          >
            Already have an account? Log in
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;
