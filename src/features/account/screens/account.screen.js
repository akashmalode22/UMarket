import React from "react";
import { Button } from "react-native-paper";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import {
  AccountBackground,
  AccountContainer,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountContainer>
        <Button
          icon="lock-open"
          mode="contained"
          color="#CEB888"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <View style={{ paddingBottom: 10 }} />
        <Button
          icon="account"
          mode="contained"
          color="#CEB888"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};
