import React, { useContext, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
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

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, error, setError, isLoading } = useContext(
    AuthenticationContext
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <AccountBackground>
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
      <View style={{ paddingBottom: 10 }} />
      <AuthInput
        label="Re-enter password"
        value={repeatedPassword}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(p) => setRepeatedPassword(p)}
      />

      <View style={{ paddingBottom: 30 }} />
      {/* {isLoading ? (
        <ActivityIndicator animating={true} color={"#CEB888"} />
      ) : (
        <Button
          icon="account"
          mode="contained"
          color="#CEB888"
          width={300}
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          Register
        </Button>
      )} */}
      <Button
        icon="account"
        mode="contained"
        color="#CEB888"
        width={300}
        onPress={() => onRegister(email, password, repeatedPassword)}
      >
        Register
      </Button>

      {error == "Passwords do not match"
        ? showMessage({ message: "Passwords do not match" })
        : null}
      {setError(null)}
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
