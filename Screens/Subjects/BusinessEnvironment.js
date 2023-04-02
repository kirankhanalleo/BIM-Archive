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
const BusinessEnvironment = () => {
  return (
    <SafeAreaView style={[styles.container, tw`pl-3 pt-3`]}>
      <StatusBar />
      <ScrollView>
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/businessenv/businessenv-2022-1.png")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/businessenv/businessenv-2022-2.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/businessenv/businessenv-2021-1.png")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/businessenv/businessenv-2021-2.png")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/businessenv/businessenv-2019-1.png")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/businessenv/businessenv-2019-2.png")}
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

export default BusinessEnvironment;

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.StatusBarheight,
    backgroundColor: "white",
    justifyContent: "center",
  },
  img: {
    resizeMode: "contain",
    height: 600,
    width: Dimensions.get("window").width - 5,
  },
  divider: {
    height: 2,
  },
});
