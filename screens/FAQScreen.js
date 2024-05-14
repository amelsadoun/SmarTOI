import React from "react";
import BackScreen from "../components/BackScreen";
import { List } from "react-native-paper";
import { colors } from "../assets/colors";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import ScreenTitle from "../components/ScreenTitle";
import { ScrollView, Text } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function FAQScreen() {
  const [fontsLoaded] = useFonts(Fonts);
  const { isDarkMode, toggleTheme } = useTheme();

  const accordions = [
    {
      title: "What devices are compatible with the app?",
      description:
        "Our app is compatible with a wide range of smart home devices, including thermostats, light bulbs, cameras, door locks, and more. You can check the compatibility list in the app or on our website for specific details.",
    },
    {
      title: "How do I connect my devices to the app?",
      description:
        "To connect your smart home devices to the app, simply follow the instructions provided in the app's setup wizard. Typically, this involves putting your device into pairing mode and then selecting it from the list of available devices in the app.",
    },
    {
      title: "Can I control my devices remotely?",
      description:
        "Yes, you can control your smart home devices from anywhere with an internet connection using our app. As long as your devices are connected to the internet and linked to your account, you can access and control them remotely.",
    },
    {
      title: "How do I create automation rules?",
      description:
        "Creating automation rules is easy with our app. Simply navigate to the automation section, choose the device or devices you want to automate, select the trigger conditions, and specify the actions you want to occur when those conditions are met.",
    },
    {
      title: "Is my data secure?",
      description:
        "We take the security of your data seriously. Our app uses industry-standard encryption protocols to protect your personal information and ensure that your smart home devices are secure from unauthorized access.",
    },
  ];

  return (
    <BackScreen>
      <ScreenTitle title="Frequently Asked Questions" />
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            marginHorizontal: "15%",
            marginBottom: 16,
            fontSize: 16,
            fontFamily: "MontserratRegular",
            color: isDarkMode ? colors.white : "black",
          }}
        >
          Do you need help with something or do you have questions on some
          features ?
        </Text>
        <List.AccordionGroup style={{ backgroundColor: "transparent" }}>
          {accordions.map((item, index) => (
            <List.Accordion
              key={index}
              rippleColor={isDarkMode? "black" : colors.darkBlue}
              title={item.title}
              id={index}
              titleNumberOfLines={20}
              style={{
                backgroundColor: isDarkMode ? colors.darkerBlue : "transparent",
              }}
              titleStyle={{
                fontFamily: "MontserratSemiBold",
                fontSize: 20,
                color: isDarkMode ? colors.white : "black",
              }}
            >
              <List.Item
                titleNumberOfLines={20}
                title={item.description}
                titleStyle={{
                  color: isDarkMode ? colors.white : "black",
                  fontFamily: "MontserratRegular",
                  lineHeight: 25,
                }}
              />
            </List.Accordion>
          ))}
        </List.AccordionGroup>
      </ScrollView>
    </BackScreen>
  );
}
