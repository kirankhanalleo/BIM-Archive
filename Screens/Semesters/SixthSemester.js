import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
const SixthSemester = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={[tw`p-3 mt-16 w-60 mb-6 bg-red-400 rounded-full`]}
          onPress={() => navigation.navigate("CSCL")}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            CSCL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 mt-4 w-60 mb-6 bg-red-400 rounded-full`]}
          onPress={() => navigation.navigate("SoftwareEngineering")}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Software Engineering
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 mt-4 w-60 mb-6 bg-red-400 rounded-full`]}
          onPress={() => navigation.navigate("BusinessEnvironment")}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Business Environment
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 mt-4 w-60 mb-6 bg-red-400 rounded-full`]}
          onPress={() => navigation.navigate("BusinessFinance")}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Business Finance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 mt-4 w-60 mb-6 bg-red-400 rounded-full`]}
          onPress={() => navigation.navigate("HRM")}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>HRM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SixthSemester;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f7f9",
    minHeight: Dimensions.get("window").height,
    height: 1000,
    flex: 1,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#555ae6",
  },
});
