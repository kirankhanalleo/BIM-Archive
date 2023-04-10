import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import SocialSignInButtons from "../Components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
const EmailConfirmationScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm({});
  const onConfirmPressed = () => {
    navigation.navigate("Home");
  };
  const onSignInPressed = () => {
    navigation.navigate("LoginScreen");
  };
  const onResendPressed = () => {
    navigation.navigate("EmailConfirmationScreen");
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Confirm your email</Text>
          <CustomInput
            name="code"
            placeholder="Confirmation Code"
            control={control}
            rules={{
              required: "Confirmation code is required.",
            }}
          />
          <CustomButton
            text="Confirm"
            onPress={handleSubmit(onConfirmPressed)}
            bgColor="#e9c46a"
            fgColor="#f1faee"
          />
          <CustomButton
            text="Resend Code."
            onPress={onResendPressed}
            type="secondary"
          />
          <CustomButton
            text="Back to Login"
            onPress={onSignInPressed}
            type="tertiary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmailConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
    marginBottom: 20,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});
