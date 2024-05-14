import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, StyleSheet } from "react-native";
import BackScreen from "../components/BackScreen";
import { colors } from "../assets/colors";
import EditingInput from "../components/EditingInput";
import { useTheme } from "../contexts/ThemeContext";
import { addDevice } from "../helpers/index";

export default function AddDeviceScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [HelperTextVisible, setHelperTextVisible] = useState(false);

  const refreshDevicesList = (navigation) => {
    // Use setParams to trigger a refresh of the devices list
    navigation.setParams({ refresh: true });
  };

  //  useEffect(() => {
  //     // Initialize the database when the component mounts
  //     init()
  //       .then(() => {
  //           console.log("Database initialized successfully");
  //       })
  //       .catch(error => {
  //           console.error("Error initializing database:", error);
  //       });
  //   }, []);

  function onAddDevice() {
    setHelperTextVisible(false);
    addDevice(deviceName, deviceType, "off")
      .then(() => {
        console.log("Device added successfully");
      })
      .catch((error) => {
        console.error("Error adding device:", error);
      });
  }

  //console.log(HelperTextVisible);

  return (
    <BackScreen>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={{
          ...styles.scrollView,
          backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
        }}
      >
        <EditingInput
          label="Device name"
          onChange={(deviceName) => setDeviceName(deviceName)}
          value={deviceName}
          required={true}
        ></EditingInput>
        <EditingInput
          label="Device type"
          onChange={(deviceType) => setDeviceType(deviceType)}
          value={deviceType}
        ></EditingInput>
        <Pressable
          disabled={deviceName == ""}
          style={styles.addButton}
          onPress={() => {
            if (deviceName != "") {
              onAddDevice();
              navigation.navigate("DevicesList", { refreshDevicesList });
            }
          }}
        >
          <Text style={styles.addButtonText}>Add device</Text>
        </Pressable>
      </ScrollView>
    </BackScreen>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    gap: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    width: "100%",
    height: 270,
    padding: 30,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 70,
    marginVertical: 12,
    color: colors.white,
    opacity: 0.75,
    fontFamily: "MontserratRegular",
  },
  addButton: {
    backgroundColor: colors.white,
    color: "black",
    width: 280,
    height: 50,
    textAlign: "center",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 15,
  },
  addButtonText: {
    fontSize: 18,
    fontFamily: "MontserratSemiBold",
  },
});
