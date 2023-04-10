import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const Password_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/;

const PasswordResetScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm({});
  const pwd = watch("password");
  const onSubmitPressed = () => {
    //Show SuccessMessage
    navigation.navigate("LoginScreen");
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
            name="code"
            placeholder="Confirmation Code"
            control={control}
            rules={{
              required: "Confirmation code is required.",
            }}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            secureTextEntry={true}
            rules={{
              required: "Password field is mandatory.",
              pattern: {
                value: Password_REGEX,
                message:
                  "Use a combination of uppercase and lowercase letters, include at least one number and one special character.",
              },
              minLength: {
                value: 8,
                message: "Password must be greater than 8 characters long.",
              },
              maxLength: {
                value: 15,
                message: "Password cannot be longer than 15 characters.",
              },
            }}
          />
          <CustomInput
            name="passwordconfirmation"
            placeholder="Confirm Password"
            control={control}
            secureTextEntry={true}
            rules={{
              validate: (value) => value == pwd || "Password do not match.",
            }}
          />
          <CustomButton
            text="Submit"
            onPress={handleSubmit(onSubmitPressed)}
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

export default PasswordResetScreen;

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
