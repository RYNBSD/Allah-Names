import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Suspense } from "react";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";

import { ThemeProvider } from "./context";
import { Names } from "./screens";

enableScreens();
const { width, height } = Dimensions.get("window");
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ width, height }}>
      <StatusBar style="auto" />
      <Suspense fallback={null}>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Names" component={Names} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </Suspense>
    </SafeAreaView>
  );
}
