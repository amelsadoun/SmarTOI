import { AppRegistry, View, Text } from "react-native";
import MainNav from "./navigators/MainNav";
// import PreviewNav from "./navigators/PreviewNav";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import StartNav from "./navigators/StartNav";
const appUsedBefore = true;

export default function App() {
	return (
		<ThemeProvider>
			<UserProvider>
				<NavigationContainer>
					{/* {appUsedBefore ? ( */}
						{/* <MainNav></MainNav> */}
					{/* ) : ( */}
						{/* <PreviewNav></PreviewNav> */}
						<StartNav></StartNav>
					{/* )} */}
				</NavigationContainer>
			</UserProvider>
		</ThemeProvider>
	);
}

AppRegistry.registerComponent("main", () => App);
