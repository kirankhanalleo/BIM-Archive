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
const HRM = () => {
  return (
    <SafeAreaView style={[styles.container, tw`pl-3`]}>
      <StatusBar />
      <ScrollView>
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/hrm/hrm-2022.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/hrm/hrm-2019.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/hrm/hrm-2019-makeup.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/hrm/hrm-2018.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/hrm/hrm-2017.png")}
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

export default HRM;

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.StatusBarheight,
    backgroundColor: "white",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    height: 580,
    width: Dimensions.get("window").width - 5,
  },
  divider: {
    height: 2,
  },
});
