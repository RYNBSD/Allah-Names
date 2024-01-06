import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

import { ThemeProvider } from "./context";
import { Names } from "./screens";

enableScreens();
const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <SafeAreaView style={{ width, height }}>
      <StatusBar style="auto" />
      <ThemeProvider>
        <NavigationContainer>
          <Names />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
