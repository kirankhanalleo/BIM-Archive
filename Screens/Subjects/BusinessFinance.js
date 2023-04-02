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
const BusinessFinance = () => {
  return (
    <SafeAreaView style={[styles.container, tw`pl-1`]}>
      <StatusBar />
      <ScrollView>
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2021/2021-1.jpg")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2021/2021-2.jpg")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2021/2021-3.jpg")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2019/2019-1.jpg")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2019/2019-2.jpg")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2019/2019-3.jpg")}
        />
        <Divider
          style={[tw`bg-red-600`, styles.divider]}
          inset={true}
          insetType="middle"
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2019M/2019m-1.jpg")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2019M/2019m-2.jpg")}
        />
        <Image
          style={[styles.img]}
          source={require("../../assets/img/sixth/business_finance/2019M/2019m-3.jpg")}
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

export default BusinessFinance;

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
