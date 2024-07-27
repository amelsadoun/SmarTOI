import { SafeAreaView, Pressable, Text, LogBox } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useFonts } from "expo-font";
import Fonts from "../components/Fonts";
import PreviewCarousel from "../components/PreviewCarousel";
import { colors } from "../assets/colors";

export default function PreviewScreen({ navigation }) {
  const [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.darkBlue,
      }}
    >
      <PreviewCarousel navigation={navigation} />
    </SafeAreaView>
  );
}
