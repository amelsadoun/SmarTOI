import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import Fonts from "./Fonts";

export const SLIDER_WIDTH = Dimensions.get("window").width + 20;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);
export const screenHeight = Dimensions.get("window").height + 50;
const white = "#FEFEFF";
const darkBlue = "#2F4062";
const yellow = "#F3F0A6";
const images = {
  image1: require("../assets/first_start_page.png"),
  image2: require("../assets/second_start_page.png"),
  image3: require("../assets/third_start_page.png"),
};

export default function CarouselCardItem({
  item,
  index,
  navigation,
  onPressNext,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const imageSource = images[item.imageKey];
  const handleButtonPress = () => {
    if (index < 2) {
      onPressNext();
    } else {
      navigation.navigate("Auth screen");
    }
  };

  return (
    <View
      style={{
        width: ITEM_WIDTH,
        shadowColor: "#000",
        height: screenHeight,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 25,
        paddingBottom: "15%",
      }}
      key={index}
    >
      {isLoading && <ActivityIndicator />}
      <Image
        source={imageSource}
        style={{
          width: ITEM_WIDTH,
          height: screenHeight,
          position: "absolute",
        }}
        onLoadEnd={() => setIsLoading(false)} // Set isLoading to false when image loading is complete
      />
      <Text
        style={{
          textAlign: "center",
          color: white,
          fontSize: 28,
          fontFamily: "MontserratBold",
          marginHorizontal: "5%",
          opacity: 0.9,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontFamily: "MontserratRegular",
          color: white,
          fontSize: 15,
          paddingLeft: 20,
          paddingLeft: 20,
          paddingRight: 20,
          textAlign: "center",
          marginHorizontal: "10%",
        }}
      >
        {item.body}
      </Text>
      <Pressable
        style={{
          backgroundColor: white,
          borderRadius: 10,
          width: "50%",
          padding: "3%",
        }}
        onPress={handleButtonPress}
      >
        <Text
          style={{
            color: darkBlue,
            fontSize: 17,
            textAlign: "center",
            fontFamily: "MontserratSemiBold",
          }}
        >
          {item.buttonText}
        </Text>
      </Pressable>
    </View>
  );
}
