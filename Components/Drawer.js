import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import "react-native-gesture-handler";
import HRM from "../Screens/Subjects/HRM";
import HomeScreen from "../Screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomDrawer from "./CustomDrawer";
import ComingSoon from "../Screens/ComingSoon";
import AboutApp from "../Screens/Sidebar/AboutApp";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";
import EmailConfirmationScreen from "../Screens/EmailConfirmationScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import PasswordResetScreen from "../Screens/PasswordResetScreen";
export default function Drawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#fe6b6a",
        drawerActiveTintColor: "#ffffff",
        drawerInactiveTintColor: "#264653",
        drawerStyle: {
          width: Dimensions.get("window").width / 1.5,
        },
        drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ComingSoon}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="call" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Terms of Use"
        component={ComingSoon}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="newspaper" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help/Support"
        component={ComingSoon}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Report a Problem"
        component={ComingSoon}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="bug" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={ComingSoon}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About the App"
        component={AboutApp}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="information-circle" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({});
