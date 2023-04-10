import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const onSendPressed = () => {
    navigation.navigate("PasswordResetScreen");
  };
  const onSignInPressed = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Reset your password</Text>
          <CustomInput
            name="email"
            placeholder="Enter your registered email"
            control={control}
            rules={{
              required: "Email is required.",
            }}
          />
          <CustomButton
            text="Send"
            onPress={handleSubmit(onSendPressed)}
            bgColor="#e9c46a"
            fgColor="#f1faee"
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

export default ForgotPasswordScreen;

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
