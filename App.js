import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SemesterListScreen from "./Screens/SemesterListScreen";
import FirstSemester from "./Screens/Semesters/FirstSemester";
import SixthSemester from "./Screens/Semesters/SixthSemester";
import CSCL from "./Screens/Subjects/CSCL";

const Stack = createNativeStackNavigator();

export default function App() {
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
