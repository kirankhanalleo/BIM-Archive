import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {
  const onLogInFacebook = () => {
    console.warn("facebook");
  };
  const onLogInGoogle = () => {
    console.warn("google");
  };
  const onLogInApple = () => {
    console.warn("apple");
  };
  return (
    <>
      <CustomButton
        text="Log in with Facebook"
        onPress={onLogInFacebook}
        fgColor="white"
        bgColor="#3b5998"
      />
      <CustomButton
        text="Log in with Google"
        onPress={onLogInGoogle}
        bgColor="#db4a39"
        fgColor="white"
      />
      <CustomButton
        text="Log in with Apple"
        onPress={onLogInApple}
        bgColor="black"
        fgColor="white"
      />
    </>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({});
