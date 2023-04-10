import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/logo_png.png";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import SocialSignInButtons from "../Components/SocialSignInButtons/SocialSignInButtons";
import { useForm, Controller } from "react-hook-form";
const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();
  const onLogInPressed = (data) => {
    navigation.navigate("Home");
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPasswordScreen");
  };
  const onSignUpPressed = () => {
    navigation.navigate("RegisterScreen");
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <CustomInput
            name="username"
            placeholder="Username"
            control={control}
            rules={{ required: "Username field is mandatory." }}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            secureTextEntry={true}
            rules={{
              required: "Password field is mandatory.",
              minLength: {
                value: 8,
                message: "Password must be atleast 8 characters long.",
              },
            }}
          />

          <CustomButton text="Log in" onPress={handleSubmit(onLogInPressed)} />
          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="tertiary"
          />
          <SocialSignInButtons />
          <CustomButton
            text="Don't have an account? Create one."
            onPress={onSignUpPressed}
            type="tertiary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: "70%",
    maxWidth: 500,
    height: Dimensions.get("window").height * 0.3,
    maxHeight: 300,
    resizeMode: "contain",
    marginBottom: 25,
  },
});
