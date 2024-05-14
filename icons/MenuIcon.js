import Svg, { Path, Circle } from "react-native-svg";
import {
  ImageBackground,
  Switch,
  Text,
  View,
  Pressable,
} from "react-native";

function MenuIcon() {
    return (
      <Pressable
        style={{
          alignSelf: "center",
          marginTop: "5%",
        }}
      >
        <Svg width={40} height={40} viewBox="0 0 48 48" fill="none">
          <Path
            d="M2 2H42"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <Path
            d="M2 12H42"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <Path
            d="M2 22H42"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </Svg>
      </Pressable>
    );
  }

  export default MenuIcon;