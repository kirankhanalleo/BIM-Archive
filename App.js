import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { usePreventScreenCapture } from "expo-screen-capture";
import SemesterListScreen from "./Screens/SemesterListScreen";
import FirstSemester from "./Screens/Semesters/FirstSemester";
import SixthSemester from "./Screens/Semesters/SixthSemester";
import CSCL from "./Screens/Subjects/CSCL";
import SoftwareEngineering from "./Screens/Subjects/SoftwareEngineering";
import BusinessEnvironment from "./Screens/Subjects/BusinessEnvironment";
import HRM from "./Screens/Subjects/HRM";
import BusinessFinance from "./Screens/Subjects/BusinessFinance";

const Stack = createNativeStackNavigator();

export default function App() {
  usePreventScreenCapture();
  return (
    <SafeAreaProvider>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
          }}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SemesterList"
            component={SemesterListScreen}
            options={{ title: "BIM ARCHIVE" }}
          />
          <Stack.Screen
            name="FirstSemester"
            component={FirstSemester}
            options={{ title: "First Semester" }}
          />
          <Stack.Screen
            name="SixthSemester"
            component={SixthSemester}
            options={{ title: "Sixth Semester" }}
          />
          <Stack.Screen
            name="CSCL"
            component={CSCL}
            options={{ title: "Computer Security & Cyber Law" }}
          />
          <Stack.Screen
            name="SoftwareEngineering"
            component={SoftwareEngineering}
            options={{ title: "Software Engineering" }}
          />
          <Stack.Screen
            name="BusinessEnvironment"
            component={BusinessEnvironment}
            options={{ title: "Business Environment in Nepal" }}
          />
          <Stack.Screen
            name="HRM"
            component={HRM}
            options={{ title: "Human Resource Management" }}
          />
          <Stack.Screen
            name="BusinessFinance"
            component={BusinessFinance}
            options={{ title: "Business Finance" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
