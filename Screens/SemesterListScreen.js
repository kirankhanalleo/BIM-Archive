import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const SemesterListScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={[tw`p-3 mt-6 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
          onPress={() => navigation.navigate("FirstSemester")}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            First Semester
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Second Semester
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Third Semester
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Fourth Semester
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Fifth Semester
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
          onPress={() => navigation.navigate("SixthSemester")}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Sixth Semester
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Seventh Semester
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tw`p-3 w-60 mb-6 bg-red-400 rounded-full`, styles.btn]}
        >
          <Text style={tw`text-white text-center font-light text-lg`}>
            Eight Semester
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SemesterListScreen;

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
