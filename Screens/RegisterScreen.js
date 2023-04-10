import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import SocialSignInButtons from "../Components/SocialSignInButtons/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const Name_REGEX =
  /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

const Email_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

const Password_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/;

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm({});
  const pwd = watch("password");

  const onRegisterPressed = () => {
    navigation.navigate("EmailConfirmationScreen");
  };
  const onSignInPressed = () => {
    navigation.navigate("LoginScreen");
  };
  const onTermsOfUsePressed = () => {};
  const onPrivacyPolicyPressed = () => {};
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Create an account</Text>
          <CustomInput
            name="name"
            id="name"
            placeholder="Full Name"
            control={control}
            rules={{
              required: "Full name field is mandatory.",
              pattern: {
                value: Name_REGEX,
                message: "Username contains invalid characters or format. ",
              },
            }}
          />
          <CustomInput
            name="email"
            id="email"
            placeholder="Email"
            control={control}
            rules={{
              required: "Email field is mandatory.",
              pattern: {
                value: Email_REGEX,
                message: "Please provide a valid email address. ",
              },
            }}
          />
          <CustomInput
            name="college"
            id="college"
            placeholder="College"
            control={control}
            rules={{ required: "College field is mandatory." }}
          />
          <CustomInput
            name="password"
            id="password"
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
              required: "Confirm Password field is mandatory.",
              validate: (value) => value == pwd || "Password do not match.",
            }}
          />
          <CustomButton
            text="Register"
            onPress={handleSubmit(onRegisterPressed)}
            bgColor="red"
            fgColor="white"
          />
          <Text style={[styles.text, tw`leading-5`]}>
            By registering, you confirm that you accept our{" "}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
              Terms of Use
            </Text>{" "}
            and{" "}
            <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
              Privacy Policy
            </Text>
            .
          </Text>
          <SocialSignInButtons />
          <CustomButton
            text="Have an account? Log in."
            onPress={onSignInPressed}
            type="tertiary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
