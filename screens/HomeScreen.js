import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  LogBox,
} from "react-native";
import { useFonts } from "expo-font";
import BackScreen from "../components/BackScreen";
import Fonts from "../components/Fonts";
import ScreenTitle from "../components/ScreenTitle";
import { useTheme } from "../contexts/ThemeContext";
import { colors } from "../assets/colors";
import { ThemeProvider } from "../contexts/ThemeContext";
import { fetchDevices, init } from "../helpers";

export default function HomeScreen({ navigation }) {
  const { isDarkMode } = useTheme();
  const [fontsLoaded] = useFonts(Fonts);
  const [devices, setDevices] = useState([]);
  //LogBox.ignoreAllLogs()
  //console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

  init()
    .then(() => {
      // console.log("Database initialized successfully");
    })
    .catch((error) => {
      console.error("Error initializing database:", error);
    }); // Add a device

  useEffect(() => {
    const fetchAndSetDevices = async () => {
      try {
        const fetchedDevices = await fetchDevices();
        setDevices(fetchedDevices);
      } catch (error) {
        console.error("Error fetching devices:", error);
      }
    };

    // Fetch devices when the component mounts
    fetchAndSetDevices();

    // Set interval to fetch devices every 1000 milliseconds (1 second)
    const intervalId = setInterval(fetchAndSetDevices, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const onAddDevice = () => {
    navigation.navigate("Add device screen");
  };
  // console.log(devices)

  if (!fontsLoaded || !devices) {
    return <ActivityIndicator />;
  }

  const DevicesListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        if (item.name !== "Add") {
          navigation.navigate("DeviceDetails", { deviceId: item.id });
        } else {
          onAddDevice();
        }
      }}
      style={{
        ...styles.deviceItem,
        backgroundColor: isDarkMode ? colors.darkerBlue : colors.darkBlue,
      }}
    >
      <Image
        source={
          item.name !== "Add"
            ? require("../assets/Light.png")
            : require("../assets/AddIcon.png")
        }
      />
      <Text style={styles.deviceText}>
        {item.name !== "Add"
          ? item.deviceName /* + " status: " + item.deviceStatus*/
          : "Add device"}
      </Text>
    </TouchableOpacity>
  );

  return (
    <BackScreen>
      <ScreenTitle title="Home" />
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              ...styles.listHeader,
              color: isDarkMode ? colors.white : "black",
            }}
          >
            Recent devices
          </Text>
        }
        numColumns={2}
        style={styles.flatList}
        data={[...devices, { _id: "add", name: "Add" }]}
        renderItem={DevicesListItem}
        keyExtractor={(item) => item.id}
      />
    </BackScreen>
  );
}

const styles = {
  deviceItem: {
    flex: 1,
    padding: 20,
    maxWidth: "50%",
    aspectRatio: 1,
    margin: 5,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  deviceText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: "MontserratMedium",
    marginVertical: 4,
  },
  listHeader: {
    fontFamily: "MontserratSemiBold",
    fontSize: 20,
    paddingVertical: 13,
  },
  flatList: {
    paddingHorizontal: 18,
  },
};
