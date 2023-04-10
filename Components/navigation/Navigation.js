import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../Screens/HomeScreen";
import RegisterScreen from "../../Screens/RegisterScreen";
import LoginScreen from "../../Screens/LoginScreen";
import SemesterListScreen from "../../Screens/SemesterListScreen";
import FirstSemester from "../../Screens/Semesters/FirstSemester";
import SixthSemester from "../../Screens/Semesters/SixthSemester";
import CSCL from "../../Screens/Subjects/CSCL";
import SoftwareEngineering from "../../Screens/Subjects/SoftwareEngineering";
import BusinessEnvironment from "../../Screens/Subjects/BusinessEnvironment";
import HRM from "../../Screens/Subjects/HRM";
import BusinessFinance from "../../Screens/Subjects/BusinessFinance";
import Drawer from "../Drawer";
import ForgotPasswordScreen from "../../Screens/ForgotPasswordScreen";
import PasswordResetScreen from "../../Screens/PasswordResetScreen";
import EmailConfirmationScreen from "../../Screens/EmailConfirmationScreen";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PasswordResetScreen"
          component={PasswordResetScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EmailConfirmationScreen"
          component={EmailConfirmationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Drawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SemesterList"
          component={SemesterListScreen}
          options={{ title: "Choose Semester" }}
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
  );
};

export default Navigation;

const styles = StyleSheet.create({});
