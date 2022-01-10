import React, { useContext, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import {
  TextInput,
  Button,
  ActivityIndicator,
  Colors,
} from "react-native-paper";

import { AccountBackground } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthInput } from "../components/account.styles";
import { showMessage, hideMessage } from "react-native-flash-message";

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error, setError, isLoading } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AccountBackground>
      <Image
        source={require("../../../../assets/logo.png")}
        style={styles.logo}
      />

      <View style={{ paddingBottom: 20 }} />
      <AuthInput
        label="E-mail"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(u) => setEmail(u)}
      />
      <View style={{ paddingBottom: 10 }} />
      <AuthInput
        label="Password"
        value={password}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(p) => setPassword(p)}
      />
      {error ? showMessage({ message: "Invalid Login Credentials" }) : null}
      {setError(null)}
      <View style={{ paddingBottom: 30 }} />
      {/* {isLoading ? (
        <ActivityIndicator animating={true} color={"#CEB888"} />
      ) : (
        <Button
          icon="lock-open"
          mode="contained"
          color="#CEB888"
          width={300}
          onPress={() => onLogin(email, password)}
        >
          Login
        </Button>
      )} */}
      <Button
        icon="lock-open"
        mode="contained"
        color="#CEB888"
        width={300}
        onPress={() => onLogin(email, password)}
      >
        Login
      </Button>

      <View style={{ paddingBottom: 80 }} />

      <Button
        icon="arrow-left-bold"
        mode="contained"
        color="#CEB888"
        onPress={() => navigation.goBack()}
      >
        Back
      </Button>
    </AccountBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 400,
    height: 100,
  },
});
