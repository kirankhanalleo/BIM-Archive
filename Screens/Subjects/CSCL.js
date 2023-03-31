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
const CSCL = () => {
  return (
    <SafeAreaView style={[styles.container, tw`pl-6 mt-0`]}>
      <StatusBar />
      <ScrollView>
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/cscl/cscl-2022.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/cscl/cscl-2021.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.imgMake]}
          source={require("../../assets/img/sixth/cscl/cscl-2021-makeup.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/cscl/cscl-2019.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/cscl/cscl-2019-makeup.png")}
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

export default CSCL;

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.StatusBarheight,
    backgroundColor: "white",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    height: 550,
    width: Dimensions.get("window").width,
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
