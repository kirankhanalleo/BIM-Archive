import {
  Dimensions,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Divider } from "@rneui/themed";
const SoftwareEngineering = () => {
  return (
    <SafeAreaView style={[styles.container, tw`pl-6 mt-0`]}>
      <StatusBar />
      <ScrollView>
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/softeng/softeng-2022.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/softeng/softeng-2021.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/softeng/softeng-2019.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/softeng/softeng-2019-makeup.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/softeng/softeng-2018.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SoftwareEngineering;

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.StatusBarheight,
    backgroundColor: "white",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    height: 600,
    width: Dimensions.get("window").width - 10,
  },
  imgMake: {
    resizeMode: "contain",
    height: 370,
    width: Dimensions.get("window").width,
  },
  divider: {
    height: 2,
  },
});
