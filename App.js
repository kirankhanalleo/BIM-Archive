import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { usePreventScreenCapture } from "expo-screen-capture";
import Navigation from "./Components/navigation/Navigation";

export default function App() {
  usePreventScreenCapture();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f2f7f9",
  },
});
