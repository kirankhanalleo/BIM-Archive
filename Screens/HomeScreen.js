import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.homescreen}>
      <ImageBackground
        style={[tw` rounded-br-3xl rounded-bl-3xl`, styles.banner]}
        source={require("../assets/welcome-banner.png")}
      >
        <FontAwesome5
          onPress={() => navigation.toggleDrawer()}
          name="bars"
          size={30}
          style={{
            color: "#fff",
            padding: 8,
            paddingLeft: 10,
            marginTop: 60,
            marginLeft: 41,
            width: 47,
            height: 47,
            backgroundColor: "#FF725E",
            borderRadius: 50,
          }}
        />
      </ImageBackground>
      <Text
        style={[
          tw`pt-10 uppercase text-2xl text-center tracking-wide font-bold`,
          styles.textWelcome,
        ]}
      >
        Welcome to BIM Archive
      </Text>
      <Text
        style={[
          tw` p-8 pb-7 pt-4 font-normal text-base text-center leading-7`,
          styles.textInfo,
        ]}
      >
        Access past exam papers easily for testing knowledge and preparing for
        upcoming exams.
      </Text>
      <TouchableOpacity
        style={tw`p-3 ml-20 mr-20 bg-red-400 w-60 rounded-full`}
        onPress={() => navigation.navigate("SemesterList")}
      >
        <Text
          style={[
            tw`font-semibold text-center text-base tracking-wide`,
            styles.btn,
          ]}
        >
          Begin Preparation
        </Text>
      </TouchableOpacity>
      <Image
        style={[styles.developer, tw`mt-10`]}
        source={require("../assets/developedbyleo.png")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    minHeight: Dimensions.get("window").height,
  },
  banner: {
    height: Dimensions.get("window").height * 0.6,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
    backgroundColor: "#555ae6",
  },
  homescreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f2f7f9",
    minWidth: Dimensions.get("window").width,
    minHeight: Dimensions.get("window").height,
    height: 1000,
  },
  textWelcome: {
    color: "#073b4c",
  },
  textInfo: {
    color: "#003049",
  },
  btn: {
    color: "#edf2f4",
  },
  developer: {
    height: 28,
    width: 125,
  },
});
