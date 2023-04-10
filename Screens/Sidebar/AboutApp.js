import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
const AboutApp = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={[
          tw` pl-4 pt-4 pb-2 h-12`,
          {
            minHeight: 50,
            flexDirection: "row",
            marginBottom: 10,
          },
        ]}
      >
        <FontAwesome5
          onPress={() => navigate.toggleDrawer()}
          name="bars"
          size={22}
          style={[
            tw`pl-2 pt-1`,
            {
              color: "black",
              width: 50,
            },
          ]}
        />
        <Text style={tw`text-lg pl-5 font-bold text-center`}>
          About the App
        </Text>
      </View>
      <View
        style={[
          tw`p-4`,
          {
            backgroundColor: "#f2f7f9",
            minHeight: Dimensions.get("window").height,
          },
        ]}
      >
        <Text style={tw`text-justify  leading-7 pl-2 pr-2`}>
          Welcome to BIM Archive, the ultimate resource for learners. Our app
          provides easy access to a wide collection of past exam question
          papers, helping learners to test their knowledge and prepare for
          upcoming exams.
        </Text>
        <Text style={tw`text-justify  leading-7 pl-2 pr-2 pt-3`}>
          Our app was created with the goal of making education more convenient
          and accessible to everyone. We believe that learning should not be
          limited by time or location, and our app reflects this belief.
        </Text>
        <Text style={tw`text-justify  leading-7 pl-2 pr-2`}>
          Our app is regularly updated with new content and features to further
          enhance the learning experience of our users.
        </Text>
        <View style={{ flex: 1, paddingTop: 60, alignItems: "center" }}>
          <View
            style={[tw`pt-6 pl-2 pr-2`, { position: "absolute", bottom: 100 }]}
          >
            <Image
              style={{
                maxHeight: 30,
                maxWidth: 130,
              }}
              source={require("../../assets/developedbyleo.png")}
            />
            <Text style={tw`font-semibold text-center pt-2 pl-2 pr-2`}>
              v1.0.0
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutApp;

const styles = StyleSheet.create({});
