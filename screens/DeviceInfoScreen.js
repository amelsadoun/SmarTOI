import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Switch,
  Pressable,
  ActivityIndicator,
  LogBox,
} from "react-native";
import { useFonts } from "expo-font";
import BackScreen from "../components/BackScreen";
import Fonts from "../components/Fonts";
import { colors } from "../assets/colors";
import { deleteDevice, fetchDevices, updateDevice } from "../helpers";
import { useTheme } from "../contexts/ThemeContext";
// import { getIPAddress } from "../helpers/NetInfo";
// import publicIP from 'react-native-public-ip';

const DeviceInfoScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts(Fonts);
  const { deviceId } = route.params;
  const [device, setDevice] = useState();
  const [status, setStatus] = useState(device?.deviceStatus);
  const { isDarkMode } = useTheme();
  //console.log(isDarkMode);
  // publicIP()
  //   .then(ip => {
  //     console.log(ip);
  //     // '47.122.71.234'
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     // 'Unable to get IP address.'
  //   });

  useEffect(() => {
    const fetchAndSetDevices = async () => {
      try {
        const fetchedDevices = await fetchDevices();
        fetchedDevices.forEach((item) => {
          if (item.id == deviceId) {
            setDevice(item);
            setStatus(item.deviceStatus);
          }
        });
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    // Fetch devices when the component mounts
    fetchAndSetDevices();
  }, []);

  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  const toggleSwitch = async () => {
    const newStatus = status === "On" ? "Off" : "On";
    setStatus(newStatus); // Update status immediately
    // console.log(newStatus);
    let a = newStatus === "On" ? "True" : "False";
    let d = a + device.id;
    console.log(d);
    // console.log("ip adress: " + getIPAddress());
    fetch("http://192.168.29.254:80/change_etat", {
      method: "POST",
      body: d,
    }).then((response) => {});
    // .catch((error) => console.log(error));
    await updateDevice(
      device.deviceName,
      device.deviceType,
      newStatus,
      deviceId
    )
      .then(() => {
        console.log(
          "Device updated successfully, new status: " + device.deviceStatus
        );
      })
      .catch((error) => {
        console.error("Error updating device:", error);
      });
    // console.log("device: " + device?.deviceStatus + " newStatus: " + newStatus + " status: " + status);
  };
  // console.log(device?.deviceId)
  if (!fontsLoaded || !device) {
    return <ActivityIndicator />;
  }

  return (
    <BackScreen>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          paddingTop: 20,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "MontserratBold",
            fontSize: 24,
            color: isDarkMode ? colors.white : "black",
          }}
        >
          Device name: {device.deviceName}
        </Text>

        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Switch
            trackColor={{ false: colors.red, true: colors.green }}
            thumbColor={status === "On" ? colors.green : colors.red}
            ios_backgroundColor={colors.blue}
            onValueChange={toggleSwitch}
            value={status === "On"}
          />
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "MontserratRegular",
                fontSize: 20,
                color: isDarkMode ? colors.white : "black",
              }}
            >
              The device is
            </Text>
            <Text
              style={{
                fontFamily: "MontserratBold",
                color: "green",
                fontSize: 20,
              }}
            >
              {status === "On" ? " on" : " off"}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "MontserratRegular",
              fontSize: 20,
              color: isDarkMode ? colors.white : "black",
              textAlign: "center",
            }}
          >
            Description:{" "}
            {device.deviceType === ""
              ? "No description provided"
              : device.deviceType}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            deleteDevice(deviceId);
            navigation.goBack();
          }}
          style={{
            backgroundColor: "#D0312D",
            padding: 10,
            paddingHorizontal: 15,
            borderRadius: 15,
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "MontserratSemiBold",
              fontSize: 20,
              color: isDarkMode ? colors.white : "black",
            }}
          >
            remove
          </Text>
        </Pressable>
      </View>
    </BackScreen>
  );
};

export default DeviceInfoScreen;
